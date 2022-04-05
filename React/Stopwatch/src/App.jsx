import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [status, setStatus] = useState(0);

  /* 0 = Not started
   1 = started
   2 = stopped
  */

  const startClock = () => {
    setStatus(1);
    setInterval(run, 10);
    console.log("Clock Started");
  };

  const run = () => {
    setMiliseconds(miliseconds + 1);
    if (miliseconds === 1000) {
      setSeconds(seconds + 1);
      setMiliseconds(0);
      console.log("seconds updated");
    }
    if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
      console.log("minutes Updated");
    }
    if (minutes === 60) {
      setHours(hours + 1);
      setMinutes(0);
      console.log("Hours Updated");
    }
    console.log(status);
  };

  const pauseClock = () => {
    clearInterval(run);
    setStatus(2);
  };

  const resetClock = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMiliseconds(0);
    setStatus(0);
  };

  return (
    <Fragment>
      <div className="App">
        <h1>Stopwatch</h1>
        <p>
          {hours}:{minutes}:{seconds}:{miliseconds}
        </p>

        {/* <Display time={time} /> */}
        <div className="buttons">
          <button onClick={startClock}>Start</button>
          <button onClick={pauseClock}>Pause</button>
          <button onClick={resetClock}>Reset</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
