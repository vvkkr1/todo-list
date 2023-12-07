import React, { useState } from 'react'
import Todos from '../todos';
import TodosList from '../todos';

const TodoForm = () => {
  const[value,setValue] = useState(""); //for taking and reading values
  const[data,setData] = useState([]); //for storing the values

  function handleOnSubmit(e){
    e.preventDefault();
   
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

  const deleteTodoItem = (id) =>{
    setData((oldValues)=>{
      return oldValues.filter((item,index)=>{
        return id!==index;
      })
    })
  }


  return (
    <div className='todo-form-container'>
      <div className='todo-form-wrap'>
        <form className='todo-form'>
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
            <button className='btn-input' onClick={handleOnSubmit}>add Item</button>
          </div>
        </form>
     </div>
    {data.map((itemVal,index)=>{
      return <TodosList
                itemVal={itemVal}
                id={index}
                key={index}
                deleteItem={deleteTodoItem}
                />
    })}
    </div>
  )
}

export default TodoForm