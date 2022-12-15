import React from 'react'
import './nav.css';
import { useState } from 'react';

function Description() {
    const[state,setState]=useState({
        title:"jhsfjhsjhf",
        Description:"nsdbjhsjhfsjh fisuinhsuifhuifhmefhsu"});
    const getUserData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then ((userdata)=>{
            console.log(userdata);
            setState({
                body:userdata[0].body,
                title:userdata[0].title,
            })
        });
       
};
  return (
    <div>
      <dl>
        <dt>Title</dt>
        <dd>{state.title}</dd>
        <dt>Description</dt>
        <dd>{state.body}</dd>
      </dl>
      <button onClick={getUserData}>description</button>
    </div>
  )
}

export default Description;
