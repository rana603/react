import './counter.css';
import { useState } from 'react';
function Counter(){
    let [state,setState] =useState(0)
    const updateCount =()=>{
    setState(state+1);
    }
    return (
        <div className='count'>
            <h2> count the value:{state}</h2>
            <button onClick={updateCount}>Update Count </button>


        </div>
    )
    
}

export default Counter;