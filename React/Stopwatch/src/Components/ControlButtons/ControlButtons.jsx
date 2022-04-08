import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      {props.isPaused ? (
        <button className="btn btn-two" onClick={props.handleReset}>
          Reset
        </button>
      ) : (
        ""
      )}

      <button className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
