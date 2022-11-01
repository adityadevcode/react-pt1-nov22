// we are using class component
// import React from 'react'

// export default function FetchApi() {
//   return (
//     <div>FetchApi</div>
//   )
// }

import React, { Component } from 'react'

class FetchApi extends Component {
    state = {
        loading:true,
        person:null,
    };
// this is normal code we need to change to async
// componentDidMount() {
// const url ="https://api.randomuser.me/";
// const response = fetch(url);
//     }

    // now we are changing code to async
async componentDidMount() {
        const url ="https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // we are updating the state
        this.setState({person:data.results[0],loading:false});
        // this.setState({person:null,loading:true});
        // this.setState({person:data.results[0],loading:false});

 console.log(data.results[0]);
            }

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
    render() {
        if(this.state.loading){
            return<div>loading...</div>;
        }
        if(!this.state.person){
            return <div>didnt get a person</div>;
        }

        return (
                     <div>
                       <div>{this.state.person.name.title}</div>
                       <div>{this.state.person.name.first}</div> 
                       <div>{this.state.person.name.last}</div> 
                       <img src={this.state.person.picture.large}/>
                    </div>
                    );
                }
            }
    
  


export default FetchApi;
