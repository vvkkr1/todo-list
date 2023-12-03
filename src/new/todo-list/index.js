import React from 'react'
import "./todoList.css";

const TodoList = (props) => {



  return (
    <div>
      <div style={{color:"white"}}>
          <div style={{display:"flex"}} className='todo-list-container'>
              <div className='todo-list'>
                  <li>{props.itemVal}</li>
              </div>
              <i 
                className='fa fa-times'
                          style={{cursor:"pointer"}}
                          aria-hidden = "true" 
                onClick={()=>{
                  props.onSelect(props.id)
                }}
              />
          </div>            
      </div>
    </div>
  )
}

export default TodoList