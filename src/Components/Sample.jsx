// import React, { Component } from 'react';

// const { render } = require("@testing-library/react");

// class Sample extends Component {
//     state = {
//         count:0,
//     };

//     styles = {
//         fontSize:30,
//         fontWeight:'bold'
//     };

//   render() {
//     return (
//         <React.Fragment>
//             <span style={this.styles}>{this.state.count}</span>
//             <button style={this.styles}>Increment</button>
//         </React.Fragment>
//     );
//   }
// }

//rendering classes dynamically
// class Sample extends Component {
//     state = {
//         count:1,
//     };

//     render() {
//         return(
//             <div>
//                 <span className={this.getBadgetClasses()}>{this.state.count}</span>
//                 <button>Increment</button>
//             </div>
//         );
//     }
// }

// getBadgetClasses() ;{
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" :"primary";
//     return classes;
// }

//rendering lists we need to use key
// class Sample extends Component{
//     state = {
//         count:0,
//         tags:['tag1','tag2','tag3']
//     };

//     render() {
//         return(
//             <div>
//                 <h3>Sample Component</h3>
//                 <ul>
//                     {this.state.tags.map(tag => <li>{tag}</li>)}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Sample;

//this is correct rendering list using key
// class Sample extends Component {
//     state = {
//         count:0,
//         tags:['tag1','tag2','tag3']
//     };

//     render() {
//         return(
//             <div>
//                 <h3>sample component</h3>
//                 <ul>
//                     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
//                 </ul>
//             </div>
//         );
//     }
// }


// export default Sample;

//conditional rendering :if we have one element in array we
//render the list other wise display message

// class Sample extends Component {
//     state={
//         count:0,
//        // tags:['adi','krish']
//        tags:[] //there are no tags
//        //tags:[1,2,3] output 123
//     };
// //render tag is helper method use for if and else statements
// renderTags() {
// if(this.state.tags.length === 0) return <p>There are no tags</p>;
// return<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
//     }

//     render() {
//         return(
//             <div>
//                 {this.renderTags()}
//             </div>
//         );
//     }
// }

// export default Sample;

//output will there are no tags

//handling events
// class Sample extends Component {
//     state = {
//         count:0
//     };

//     handleIncrement() {
//         console.log("Increment clicked");
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleIncrement}>Increment</button>
//             </div>
//         );
//     }
// }

// export default Sample;

//Binding event handlers
//in event handlers we dont have access to this so we use bind to solve
//in constructor we can have access to this, we need to use super while accesssing constructor
// class Sample extends Component {
//     state ={
//         count:0
//     };

//     constructor() {
//         super();
//         console.log("constructor", this);
//     }

//     handleIncrement() {
//         console.log("Increment clicked");
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleIncrement}>Increment</button>
// </div>
//         );
//     }
// }

// export default Sample;

//to access this we need to use arrow function

// class Sample extends Component {
//     state = {
//         count: 0
//     };

// handleIncrement = () => {
//     console.log('Increment Clicked', this);
// }

// render() {
//     return(
//         <div>
//             <button onClick={this.handleIncrement}>Increment</button>
//         </div>
//     );
// }
// }

// export default Sample;

//update the state ,we dont modify state directly, we use this.setstate() method

// class Sample extends Component {
//     state = {
//         count:0
//     };

//     handleIncrement = () => {
//         this.setState({count: this.state.count + 0})
//     };

//     render(){
//         return (
//             <div>
//                 <button onClick={this.handleIncrement}>Increment</button>
//             </div>
//         )
//     }
// }

//     export default Sample;

//props
// const Sample = (props) => {
// return (
//     <div>
//         <h2>{props.name}</h2>
//     </div>
// )
// }

// export default Sample;

//props in internal component default props
//  const Sample = ({name}) => {
// return (
//     <div>
//         <h1>{name}</h1>
//     </div>
// )
//  }

//  Sample.defaultProps = {
//     name:'Krishna',
//  }

// export default Sample;

// //instyle styling
// const Sample = () => {
//     return(
//         <div>
//             <h3 style={{color:'blue'}}>welcome</h3>
//         </div>
//     )
// }
// export default Sample;

//variable instyling
// const Sample=() => {
//     return(
//         <div>
//             <h3 style={headingStyle}> welcome</h3>
//         </div>
//     )
// }

// const headingStyle = {
//     color:'purple'
// }

// export default Sample;

import React from 'react'

export default function Sample() {
  return (
    <div>Sample</div>
  )
}






















