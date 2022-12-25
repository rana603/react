import './App.css';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
    <h1 className="h-tag">Timer And Stopwatch</h1>
    <div className="App">
      <div className="button-box">
       
        <button onClick={() => setDisplay(true)}>Timer</button>
       
        <button onClick={() => setDisplay(false)}>Stopwatch</button>
      </div>
      {
        display ?
          <div className="timer">
            <Timer />
          </div> :
          <div className="stopwatch">
            <Stopwatch />
          </div>
      }
    </div>
    </>
  );
}

export default App;
