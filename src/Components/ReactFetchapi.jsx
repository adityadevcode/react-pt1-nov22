// how to handle ajax calls in react
// how to handle ajax calls response
// regres.in for api calls
//in react for ajax calls we use fetch method for fetch calls
//fetch is a promise type
//we have 3 status resolve pending rejected
// fetch call in class component we use componentdidmount
// import React from 'react'

// const ReactFetchapi = () => {
//   return (
//     <div>
//         <h3>ReactFetchapi</h3>
//         </div>
//   )
// }

// export default ReactFetchapi;

/////correct code //////

// import {useEffect, useState} from 'react';
// function ReactFetchapi() {

//     useEffect(()=> {
//       fetch("https://reqres.in/api/users?page=2")
//       .then(res => res.json())
//       .then((result)=> {
//         console.log('Result: ',result);
//       })
//       .catch((error) =>{
//         console.log('error: ', error)
//       })

//     },[])

//     // errors we have 2 types server error (if api is not as expected then 404)
//     //  404-not found
//     // 500- internal server error
//     // 200-successfully data to and fro

//     return (
//         <div>
//                 <h3>ReactFetchapi</h3>
//                 </div>
//     )
//     }

//     export default ReactFetchapi;
//////////////////////

// import { useEffect, useState } from "react";

// function ReactFetchapi() {
//     // to display data in table we are using state 
//   const [userData, setUserData] = useState([]); //({}) empty obj/arr

// //   fetch call we use in useeffect hook in class componentdidmount
//   useEffect(() => {
// // using fetch method we are calling url/api/get !! fetch means get
//     fetch("https://reqres.in/api/users?page=2")
//     // request is gone through url and success
//     // we got our response and we need to convert into json
//       .then((res) => res.json())
//       //output of json response keeping in result 
//       .then((result) => {
//         console.log("Result: ", result);
//         // the response we got in result we are updating to setuserdata
//        //in state we are using Array
//         setUserData(result.data);
//       })
//     //   incase if we get error then catch. if api call is failed
//       .catch((error) => {
//         console.log("error: ", error);
//       });
//   }, []);

// //   we are creating table and load all info

//   return (
//     <div>
//       <h3>ReactFetchapi</h3>
//       <br></br>
//       <table>
//         <tbody>
//         <tr>
//           <th>ProfilePic</th>
//           <th>NAME</th>
//           <th>ID</th>
//           <th>EMAIL</th>
//         </tr>
//         {
// // in user data we have array of elements, we need to loop data and get it using map
// //before looping we need to check condition
//         userData && userData.length > 0 && userData.map((item) => {
//             return <tr>
//               <td><img src={item.avatar}/></td>
//               <td>{item.first_name} {item.last_name}</td>
//               <td>{item.id}</td>
//               <td>{item.email}</td>
//             </tr>
//           })
//           }
//           </tbody>
//       </table>
//     </div>
//   );
// }

// export default ReactFetchapi;
