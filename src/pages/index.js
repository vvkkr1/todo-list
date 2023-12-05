import React, { useState } from 'react'
import "./todoHomepage.css";
import TodoForm from '../todos-list/todo-form';

// import Todo from '../components/todo';
// import TodoForm from '../new/todo-form';


const TodoHomepage = () => {

    return(
        <div className='todo-homepage'>
            <TodoForm/>
        </div>
    )
    

}
export default TodoHomepage;










// const[data,setData]=useState("")
// const[value,setValue]=useState();
// function handleSubmit(){

// }
// function handleOnChange(e){
//     // e.preventDefault();
//     // console.log(e.target.value)
//     setValue(e.target.value);
// }
// console.log(value);

// return (
//     <div className='todo-homepage'>
//         TodoHomepage
   
//         <input type='text' name='user' onChange={handleOnChange}/>
//         {value ? <Completed /> : <Todo/>}
//         <button >Add todo</button>
//     </div> 
// )
// }

