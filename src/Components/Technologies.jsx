// import React from 'react'

import { isDOMComponent, scryRenderedComponentsWithType } from "react-dom/test-utils"

// export default function Technologies() {
//   return (
//     // // fragment tag 
//     // //when we are inserting hmtl structure in react we will use fragment tag
//     // <fragment>
//     //   <p>welcome</p>
//     // </fragment>
//     // // <div>
//     // //   hello //when we inspect it will show div
//     // //<p> hello</p> paragraph will show inside div, everytime using div it rerendering parent element we should avoid
//     // // we are adding extra tag using div so use fragment
//     // // when we write list of html elements we use fragment
//     // // </div>

//   )
// }

//multiple ways we can write components in react
// // class and functional component
// // es6 class components 16.8 functional components

// import React, {Component} from "react";

// class Technologies extends Component {
// render() {
//   return <h3>subheading class comp</h3>
// }
// }

// export default Technologies;

//functional component
// import React, {component} from "react";

// function Technologies() {
//   return <h3>subheading functional compo</h3>
// }

// export default Technologies;

//ARROW FUNCTION
// import React, {Component} from "react";

// const Technologies= () => {
//   return<h3>Subheading Arrow function</h3>
// }

// export default Technologies;
//no need to write render in functional and arrow components

//component lifecycle
// when component is rendered first Time
// when values are updated in that component
// when component is destroyed
// dom-document object module in react it is virtual dom
// react-virtualdom-when we will render html element-when values will reload

// 3 stages component lifecycles 
// mounting
// updating
// unmounting

//in each stage we have different methods
// Mounting methods:
// 1.constructor() methods
// 2.static getDerivedStateFromProps()
// 3.render()
// 4.componentDidMount()

// componentdidmount is there in class and functional componentDidMount
// in functional we use hooks concepts (useEffect hook)
// componentDidMount  
// componentwillreceiveprops
// for mounting and unmounting 
// all above we can achieve in useeffect hook

// Updating methods:
// already render the content we can see output in browser
// when we click on a button, the value is updated then component will rerender
// browser will reload and browser will display updated value
// 1.static getDerivedStateFromProps()
// 2.shouldComponentUpdate()
// 3.render()
// 4.getSnapshotBeforeUpdate()
// 5.componentDidUpdate()

// Unmounting methods:
// when component is removed from Dom
// 1.componentWillUnmount()

// when we get error while rendering then we use componentDidCatch

// we have a concept in react (Error boundary is hoc)
// in error boundary what type of lifecycle you have used means componentDidCatch

// error handling :when we get error while component is rendering into dom
// componentDidCatch();
// in class component we will see static getDerivedStateFromError
// we will use above methods when we get errors

///////////////////////////////////
// react code setup 
// npx create-react-app sampleapp
// npm start 

//////////////
// react native
// -we can develop our project using development enviornment//
// -we can take help of expo where it is a framework to generate react native apps
// - react is web based apps
// -react native use to create native apps for andriod and ios
// -with single code we can build ios and andriod apps
// -in react webbased we use jsx, html tags, attributes and other
// -in react native we have concept jsx but we use component, elements we 
// have react native components , react will provide buttons forms 
// -before pushing into production we need to small configuration changes
// for both os and andriod
// -for testing we use test flight we need confgure with apple id so that 
// so that it will give a testing enviornment, we can share our Ipa (ios) so that they will
// get mail notification, they can download ipa and run the application in there mobile this is for testing
// -seperate testing team for testing
// -play store andriod, we can register as a testing environment and we can share apps through
// end customer or internal clients
// -for ios the package will generate as ipa
// -for andriod the package is apk
// -in ios we can generate ipa we can share with team members
// -google drive we use
// - andriod application apk build files share with google drive to install and test

// -we are directly communicating with native elments in react which is working with js
// -so it is faster
// -key features
// truly native app
// user interaction is smooth
// javascript prototype inheritance
// its is a cross platform both we can write in a single code and
// generate output for ios and andriod
// -code splitting (100 lines of code we can split into ten ten line of code)
// -solid principles 
// -in class we have render method in function we have return 

// -expo: is a framework to write our programs, it is a set of tools
// services built aroud react. it helps you develop, build, deploy and quickly iterate on ios
// andriod and web apps from the same js/typescript codebase

// -recommended way for small project 3 to 4 pages go with expo
// -medum to large scale app then native development 
// -ecommerce/enterprise version then 100 screens of page react native
// -camera scanner package 
// -multiple user interactions 
// -location, get gelolocations we need 3rd party
// -we can use typescript for both expo and native
// -ios simulator
// -how to confgure in windows and iphone
// -debugger tool (developer tool)

//npm install expo
//expo init my-app

/////////////////////////////////
// useState hook

// //when we are using class component we have faced side affects
// to over this issue function hooks were introduced
// -when we deal with state we use useState

import React, {useState} from "react";

function Technologies() {
  const[count,setCount] = useState(0);

  const btnClick = ()=> {
    console.log("hi");
    // count++ we should not update state directly
   //we can get count variable then add +1 so this one will not update state value directly
    setCount(count + 1);
    console.log('count: ', count)
  }

  return (
    <div>
      <button onClick = {btnClick} >Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Technologies;