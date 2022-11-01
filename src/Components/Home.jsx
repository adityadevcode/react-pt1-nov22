import React from 'react'

export default function Home() {
  return (
    <div>
        <h2>Home Component</h2>
    </div>
  )
}

//fetching data with hooks
// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// function Home(){
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function getUsers() {
//       const result= await axios('https://jsonplaceholder.typicode.com/todos/1');
//       setUsers(result.data);
//       console.log(setUsers);
//     }
//   });

//   return(
//     <div>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Home;