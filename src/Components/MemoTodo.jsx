//todo oka component emaina value change ayithe render avuthundi 
// without out using memo it will render everytime when parent comp will render
//oka vella todos component values change ayithe apudu render avuthundi
// rneder in todos we will usecallback
import React, {memo} from 'react'

const MemoTodo = ({todos}) => {
    // console.log("child render");
    console.log("child render");
  return (
    <> 
   <h3>Memo TodoApp Child comp</h3>
   {/* map function run chesthunam */}
   {/* todos dei=fine ayi vunda, todos length entha enni values vunai,greater than 0 ayithe map */}
   {
    todos && todos.length > 0 && todos.map((item,index) => {
        // return <p key={index}>{item}</p>
       return (
        <p key={index}>{item}</p>
       )
    })
   }
   </>
  )
}


export default memo(MemoTodo);
// we should wrap with memo