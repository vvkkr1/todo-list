// import React,{useState} from 'react'
// import './todoForm.css';

// const TodoForm = () => {
//   const[value,setValue]=useState("");
//   // const[data,setData]=useState([]);

//   function handleSubmit(event){
//     event.preventDefault();
    
    
//     console.log(value);
//     // setData(value);
//   }

//   return (
//     <div className='todo-form'>
//       <form className='form' onSubmit={handleSubmit}>
//         <div>
//           <input 
//             type="text" 
//             className='todo-input' 
//             value={value} 
//             name='item' 
//             onChange={(event)=>setValue(event.target.value)} 
//             placeholder='enter item name...'
//           />
//         </div>
//         <h1>{value}</h1>
//         <div>
//           <button className='todo-btn'>Add Items</button>
//         </div>
//       </form>
//     </div>
//   )

// }
//  export default TodoForm