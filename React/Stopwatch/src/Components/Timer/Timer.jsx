import React from "react";
import "./Timer.css";

export default function Timer(props) {
  const mins = `0${Math.floor((props.time / 60000) % 60)}`.slice(-2);
  const secs = `0${Math.floor((props.time / 1000) % 60)}`.slice(-2);
  const milisecs = `0${(props.time / 10) % 100}`.slice(-2);

  const laps = [1, 2, 3, 4, 5];
  const currentTime = `${mins}:${secs}:${milisecs}`;
  const lap = () => {
    laps.push(currentTime);
    console.log(laps);
  };

  return (
    <>
      <div className="timer">
        <span className="digits">{mins}:</span>
        <span className="digits">{secs}:</span>
        <span className="digits mili-sec">{milisecs}</span>
      </div>
      <div>
        <div>
          {/* <h1>Laps</h1>
          {laps.map((lap) => (
            <p>{lap}</p>
          ))} */}
          <button className="btn" onClick={lap}>
            Lap
          </button>
        </div>
      </div>
    </>
  );
}
