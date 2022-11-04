//memo is hoc
//react.memo anedi component oka hoc idi hook
 //it memorize the component dependencies em ayina change ayithe thappa rerender cheyadu
// dini vala performance improve avuthundi. it will stop rerendering 
// 
// use.memo anedi hook 


import React, {useState} from 'react';
import  './Styles/Memo.css';
import MemoTodo from './MemoTodo';

const Reactmemo = () => {
    const [count, setCount] =useState(0)
    // we are declaring MemoTodo state here
const [todos, setTodos] =useState(["todos task1"]);
// console.log(todos);
    const increment =() =>{
        setCount(()=>count+1);
       console.log('Count: ',count)
        } 
// increment chesina prathi sari todos child render avuthundi which is wrong
// buttn is there in parent component when we click button its rendering child
// epudaithe count state update avuthundo todos kuda avuthundi
 //ila child component render avadu ante we reactmemo in todos
 
 return <>
    <div className='block'>
        {/* <h3>ReactMemo</h3>  */}
        <p>{count}</p>
    <button onClick={increment}> Counter Increment</button> 
 </div>
 {/* <MemoTodo todos={todos}/> */}
 <MemoTodo todos={todos}/>
  </>
}

export default Reactmemo;