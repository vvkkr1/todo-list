import React, { useState } from 'react'
import "./todoHomepage.css";
// import Completed from '../components/completed';
// import Todo from '../components/todo';
import TodoForm from '../components/todo-form';

import Todo from '../components/todo';


const TodoHomepage = () => {

    return(
        <div className='todo-homepage'>
            <TodoForm />
            <Todo name="vivek"/>
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

