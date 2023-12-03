import React, { useState } from 'react'
import "./todoForm.css";
import TodoList from '../todo-list';

const TodoForm = () => {
//this state is to add the value
const[value,setValue]=useState("");

//this state to get/add the value
const[data,setData]=useState([]);

//item empty array to add values
// const[items, setItems] = useState([]);

   function handleOnSubmit(event){
    event.preventDefault();

      
        setData((oldValues)=>{
            return [...oldValues, value]
        })

        //to erase data froom input box
        setValue("");
    }
    console.log(data);

    function deleteItems(id){
        setData((oldValues)=>{
            return oldValues.filter((arrElem,index)=>{
                return id !== index;
            })
        })
    }

  return (
    <div className='todo-form-container'>
        <form className='todo-form'>
            <div className='input-wrap'>
                <input 
                  type="text" 
                  name='item'
                  value={value}
                  placeholder='enter item name here...'
                  className='todo-input'
                  onChange={(e)=>setValue(e.target.value)}
                />
            </div>
            <div className='btn-wrap'>
                <button className='todo-btn' onClick={handleOnSubmit}>add items</button>
            </div>
            {/* <p style={{color:"white"}}> {value}</p>
            <p style={{color:"white"}}> {data}</p> */}
        </form>
        {data.map((itemVal,index)=>{
           return <TodoList 
                    itemVal={itemVal}
                    onSelect={deleteItems}
                    key={index}
                    id={index}
                 />
         })}
    </div>
  )
}

export default TodoForm