import React from 'react'

const TodosList = (props) => {
  return (
    <div className='todos-container'>
      <div className='todos-list'>
        <li>{props.itemVal}</li>
      </div>
      <div className='delete-item-icon'>
        <i style={{cursor:"pointer"}} 
           className='fa fa-times'
           onClick={()=>{props.deleteItem(props.id)}}
        />
      </div>
    </div>
  )
}

export default TodosList