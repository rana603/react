import React from 'react';
import { useEffect, useRef, useState } from "react";
import Styles from './Timer.module.css';

function Timer3() {

    const [msec, setmsec] = useState(0);
    const [sec, setSec] = useState(0);
    const[min,setMin]=useState(0);
    const[start,setStart]=useState(false);

    useEffect(() => {
        return () => clearInterval(id.current);
    }, []);

    // let id = useRef();

    let millisec=msec<10?"0"+msec:msec;
    let minuts=min<10?"0"+min:min;
    let seconds=sec<10?"0"+sec:sec;

    let id = useRef(-1);

    if (msec===99){
        setSec(sec+1);
        setmsec(0);
    }
    if (sec===59 && msec===99){
        setMin(min+1)
        setSec(0)
        setmsec(0)
    }
    const handleStart=()=>{
        setStart(!start)
        id.current=setInterval(()=>{
            setmsec(prev=>prev+1)
        },10)
    }
    const handleStop=()=>{
        setStart(!start)
        clearInterval(id.current);
    }
    const handleReset=()=>{
        setMin(0)
        setmsec(0)
        setSec(0)
        clearInterval(id.current)
    }

    return (
        <div className={Styles.timerContainer}>
            <h1>Timer</h1>
            <h1>{minuts}:{seconds}:{millisec}</h1>
            <button onClick={start?handleStop:handleStart}>{start?"Pause":"start"}</button>
            {/* <button onClick={() => clearInterval(id.current)}>Pause</button> */}
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Timer3;

