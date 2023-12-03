import React, { useState } from 'react'
import "./todoForm.css";

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
        <div>
            <ol style={{color:"white"}}>
                {/* <li>hello</li> */}
                <h2>Items</h2>
                {data.map((itemVal)=>{
                    return <li>{itemVal}</li>
                })}
            </ol>
        </div>
    </div>
  )
}

export default TodoForm