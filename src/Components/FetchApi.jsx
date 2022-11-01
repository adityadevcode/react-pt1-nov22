// we are using class component
// import React from 'react'

// export default function FetchApi() {
//   return (
//     <div>FetchApi</div>
//   )
// }

// import React, { Component } from 'react'

// class FetchApi extends Component {
//     state = {
//         loading:true,
//         person:null,
//     };
// this is normal code we need to change to async
// componentDidMount() {
// const url ="https://api.randomuser.me/";
// const response = fetch(url);
//     }

    // now we are changing code to async
// async componentDidMount() {
//         const url ="https://api.randomuser.me/";
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         // we are updating the state
//         this.setState({person:data.results[0],loading:false});
//         // this.setState({person:null,loading:true});
//         // this.setState({person:data.results[0],loading:false});

//  console.log(data.results[0]);
//             }

//   render() {
//     return (
//     <div>
//         {/* if person is not there */}
//         {this.state.loading || !this.state.person ? (
//              <div>loading...</div>
//              ):(
//              <div>
//                <div>{this.state.person.name.title}</div>
//                <div>{this.state.person.name.first}</div> 
//                <div>{this.state.person.name.last}</div> 
//                <img src={this.state.person.picture.large}/>
//             </div>
//             )}
//     </div>
//     );

    // alternate we can use if statments
//     render() {
//         if(this.state.loading){
//             return<div>loading...</div>;
//         }
//         if(!this.state.person){
//             return <div>didnt get a person</div>;
//         }

//         return (
//                      <div>
//                        <div>{this.state.person.name.title}</div>
//                        <div>{this.state.person.name.first}</div> 
//                        <div>{this.state.person.name.last}</div> 
//                        <img src={this.state.person.picture.large}/>
//                     </div>
//                     );
//                 }
//             }
    
  


// export default FetchApi;


//fetching data from Api
//fetching data we need to use useeffect hook
import React from 'react'

function FetchApi() {
    //declaring a state using usestate hook
    // it is used to store data fetch from api
    // '[]' means useeffect hook will only run once
    const [data, setData]= React.useState([]);
    // for fetching datq we need to use useeffect hook
    React.useEffect(() => {
        //writing function to fetch data this will async
        // as function is async it will intrepret other tasks
        const fetchLocation = async () => {
            // using json placeholder api
            await fetch("https://jsonplaceholder.typicode.com/users")
            // after getting data we need to convert using json
            .then((res) => res.json())
            // t will convert to json format
            //we will store data in previously declared state
            .then((data) => {
                // setData will cause to re-render the Ui
                setData(data);
                console.log(data);
            });
        };
        // make sure we need to call function
        fetchLocation();
    }, []);

    //nitially we will get error because data need to arrive first
    //data will come after .5 seconds it will show error it will show data state is empty
    //we need to add check, if data is not arrived it will show loading on screen
    if(!data.length) return <div>Loading...</div>
    return (
        <div className="App">
            Name:{data[1].name}
            <br/>
            Email:{data[1].email}
            <br/>
            Phone:{data[1].phone}
            <br/>
            Address:{data[1].address.street}
            <br/> 
            Username:{data[1].username}
            <br/> 
            Website:{data[1].website}
            <br/> 
            Company:{data[1].company.name}
            <br/> 
        </div>
    );
}

export default FetchApi;
//fetched an api/stored the value and displayed in UI