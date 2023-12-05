import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
      <div className='todo-form-wrap'>
          <div className='input-type-wrap'>
              <input 
                type="text" 
                className='input-type' 
                onChange={"something"}
                placeholder='write item name here...'
              />
          </div>
          <div className='btn-wrap'>
            <button onClick={"handleOnClick"}>Add Item</button>
          </div>
      </div>
        This is todo form
    </div>
  )
}

export default TodoForm