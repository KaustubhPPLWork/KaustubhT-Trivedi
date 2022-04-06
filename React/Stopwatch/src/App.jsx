import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState({
    miliseconds: 0,
    seconds: 0,
    mins: 0,
  });
  // const [mins,setMins] = useState(0)
  // const [inter, setInter] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [count, setCount] = useState(0);

  const runClock = () => {
    // if (isActive && isPaused === false)
  };
  // console.log(timer.miliseconds);
  const updateCounter = () => {
    setCount((count) => count + 1);
  };
  const startClock = () => {
    // startClockTicks;
    setIsActive(true);
    setIsPaused(false);
    setInterval(() => {
      if (isActive && isPaused === false) {
        setTimer({
          ...timer,
          miliseconds: timer.miliseconds + 10,
          // miliseconds:
        });
        if (timer.miliseconds === 1000) {
          setTimer({
            ...timer,
            miliseconds: 0,
            seconds: timer.seconds + 1,
          });
          if (timer.seconds === 60) {
            setTimer({
              ...timer,
              seconds: 0,
              mins: timer.mins + 1,
            });
          }
        }
      }

      // updateCounter();
    }, 10);
    console.log("started");
    console.log(timer.miliseconds);
  };

  const stopClock = () => {
    // clearInterval(interval);
    setIsActive(false);
    console.log("Stopped");
  };

  const pauseClock = () => {
    setIsActive(false);
    setIsPaused(true);
  };
  const resetClock = () => {
    setIsPaused(false);
    setIsActive(false);
    setTimer({
      miliseconds: 0,
      seconds: 0,
      mins: 0,
    });
  };
  return (
    <Fragment>
      <div className="App">
        <h1>
          {timer.mins}:{timer.seconds}:{timer.miliseconds}
        </h1>

        <div className="buttons">
          <button onClick={startClock}>Start</button>
          <button onClick={stopClock}>Stop</button>
          <button onClick={pauseClock}>Pause</button>
          <button onClick={resetClock}>Reset</button>
        </div>

        <div>
          {count}

          <button>Add</button>
          <button>Subtract</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
