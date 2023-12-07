import React, { useState } from 'react'
import Todos from '../todos';

const TodoForm = () => {
  const[value,setValue]=useState("");
  const[data,setData]=useState([]);

  function handleOnSubmit(e){
    e.preventDefault();
    // console.log(value);

    // setData((oldValues)=>{
    //   return 
    // })
    setData((oldValues)=>{
      return [...oldValues, value]
    });
    // console.log(value);
    setValue("")
  }
  console.log(data);

  // const handleOnDelete = (id) => {

  //   setData((oldValues)=>{
  //     return oldValues.filter((item,index)=>{
  //          return id !==index;
  //     })
  //   })

  // }


  return (
    <div className='todo-form'>
      <div className='todo-form-wrap'>
        <form>
          <div className='input-type-wrap'>
              <input 
                type="text" 
                name='item'
                className='input-type' 
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                placeholder='write item name here...'
              />
          </div>
          <div className='btn-wrap'>
            <button className='btn-input' onClick={handleOnSubmit}>Add Item</button>
          </div>
          <div>
            {/* <button onClick={handleOnDelete}>Delete</button> */}
          </div>
        </form>
     </div>
    <Todos/>
    </div>
  )
}

export default TodoForm