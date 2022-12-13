import React from 'react'
import './todo.css';
import { useState } from 'react';

 function Todo(props) {
    const [inputData,setInputData]=useState("");
    const[state,setState]=useState("No Data");
    const getInputData=(event)=>{
        setInputData(event.target.value)
    }
    const updateState=()=>{
        setState(inputData)
    }
  return (
    <div style={{textAlign:"center"}}> 
      <h1>Todo App</h1>
      <input  onChange={getInputData} type="text" name="" id="" />
      <button onClick={updateState} >submit</button>
      <p>{state}</p>
    </div>
  )
}
export default Todo;