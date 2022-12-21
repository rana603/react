// import React from 'react';
import React, {useState} from 'react';
import './counter.css'

function Counter() {
    const[count,setCount]=useState(0);
    const [countb,setCountb]=useState(0);
    const [countc,setCountc]=useState(0);

    const handleChange=(value)=>{
        setCount(count+value);
    }
    const handleChangeb=(value)=>{
        setCountb(countb+value);
    }
    const handleChangec=(value)=>{
        setCountc(countc+value);
    }
  return (
    <div className='cont'>
      <div className='subcount'>
        <h4>Nudles</h4>
        <h4>${count*30}</h4>
        <button onClick={()=>handleChange(-1)}>-</button>
        <h4>{count}</h4>
        <button onClick={()=>handleChange(+1)} >+</button>
      </div>
      <div className='subcount'>
        <h4>Biryani</h4>
        <h4>${countb*90}</h4>
        <button onClick={()=>handleChangeb(-1)}>-</button>
        <h4>{countb}</h4>
        <button onClick={()=> handleChangeb(+1)}>+</button>
      </div>
      <div className='subcount'>
        <h4>chips</h4>
        <h4>${countc*10}</h4>
        <button onClick={()=>handleChangec(-1)}>-</button>
        <h4>{countc}</h4>
        <button onClick={()=> handleChangec(+1)}>+</button>
      </div> 
      <h4>Total {count*30+countb*90+countc*10}</h4>
    </div>
  )
}

export default Counter;
