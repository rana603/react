import React from 'react';
import { useEffect, useState } from 'react';
import Styles from './Timer.module.css';

function Timer2() {
    const [seconds, setSeconds] = useState(0);
    const [minuts, setMinuts] = useState(0);

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds((prev)=>prev+1);
            if (seconds === 59) {
                setMinuts((prev)=> prev+1);
                setSeconds(0);
            }
        }, 1000)
        return () => clearInterval(timer);
    });

    const restart = () => {
        setMinuts(0);
        setSeconds(0);
    }
    const stop = () => {
        clearInterval(timer);
    }

    return (
        <div className={Styles.timerContainer}>
            <h1>Timer</h1>
            <h1>{minuts < 10 ? "0" + minuts : minuts}:{seconds < 10 ? "0" + seconds : seconds}</h1>
            <button onClick={restart}>Restart</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default Timer2;
