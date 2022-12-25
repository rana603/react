import React from 'react';
import Style from './Style.module.css';
import { useState,useEffect,useRef } from 'react';

function Stopwatch() {
    const [time,setTime]=useState(0);
    const [timerOn,setTimeOn]=useState(false);

    const timer = useRef(null);
    
    useEffect((timer)=>{
        if(timerOn)
        {
            timer=setInterval(()=>{
                 setTime((prev)=>prev+10)
             },10)
        }
        else if(!timerOn){
            clearInterval(timer)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[timerOn])

    const handleStart=()=>{
        setTimeOn(true);
    }
    
    const handleReset=()=>{
        setTime(0);
        setTimeOn(false)
    }
    
    const handleStop=()=>{
        setTimeOn(false)
    }
  return (
    <div className={Style.StopWatch}>
             <h1>Stopwatch</h1>
            <div ref={timer} className={Style.time}>
                <span>{("0"+ Math.floor((time/600000)%60)).slice(-2)} h :</span>
                <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)} m :</span>
                <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)} s :</span>
                <span>{("0"+ ((time/10)%100)).slice(-2)} ms</span>
            </div>
            <div className={Style.b}>
                <button className={Style.start} onClick={handleStart}>START</button>
                <button className={Style.stop} onClick={handleStop}>STOP</button>
                <button className={Style.reset} onClick={handleReset}>RESET</button>
            </div>
        </div>
  )
}

export default Stopwatch
