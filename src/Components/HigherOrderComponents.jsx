//manam rase component ni input ga inkoka function ki isthe
// daniki konni addon feture add chesi output kinda generate chesthundi.kotha component return chesthundi

//hoc: is an advanced technique in react for resuing component logic
//A HOC is a function that takes a component and returns a new component
//the component we write it will pass to another component as input,it will addon features 
// and return new component
//in src- components folder, hoc folder- new file styleWrapper.component.js (custom wrapper component)
//hoc lo nenu rayalisina style motham rasi app.js ki e hoc component
// input kinda pampa app.js lo
//instead of div we use <fragment> // we use empty brackets <> </>
// in real time reusability ui or reusabilitylogic hoc will help out
// error boundaries  exception handling
// in redux (connect hoc)input tisukuntundi kotha component kinda return chesthundi
// import React, {Component} from 'react';

// const HigherOrderComponents = (HocComponent) => {
//   return class extends Component {
//     render(){
//         return (
//             <div className ="block">               
//                 <HocComponent />
//                 hi
//             </div>
//         )
//     }
//   }
// }

// export default HigherOrderComponents;

// import React from 'react'

//  const HigherOrderComponents = () => {
//   return (
//     <div>HigherOrderComponents</div>
//   )
// }

// export default HigherOrderComponents;

//need to complete hoc taks completely