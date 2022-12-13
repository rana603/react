import React from 'react'
import { useState } from 'react';
import './list.css';

 function List(props) {
    let [techItem, setTechItem]=useState(["react","angular","python"]);
    let [name,setName]=useState("gautam");
    let[city,setCity]=useState("haldwani");
  return (
    <div style={{textAlign:"center"}}>
      <h1>RENDER LIST OF ITEMS</h1>
      <h3>list of Skill</h3>
      <h5>{name} is from {city}</h5>
      <ol>{
        techItem.map((ele)=>{
            return <li>{ele}</li>
        })
    }
      </ol>
    </div>
  )
}
export default  List;
 