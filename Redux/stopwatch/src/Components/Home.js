import React from 'react';
import Clock from './Clock';
import Button from './Buttons';
import Laps from './Laps';
import { useSelector, useDispatch } from 'react-redux';
import { updateTime, resetTime, addLap, dropLaps } from '../Actions/Index';
function Home() {

    const dispatch = useDispatch();
    const clock = useSelector(state => state.time.time);
    const laps = useSelector(state => state.laps.laps);

    const [isStart, setIsStart] = React.useState(false);

    const handleLap = () => {
        const lapnow = clock;
        dispatch(addLap(lapnow))
        console.log(laps);
    }

    const handleReset = () => {
        dispatch(resetTime());
        setIsStart(false);
        dispatch(dropLaps());
        clearInterval(idtime);
    }

    let idtime = React.useRef();
    const handleStart = (isRunning) => {
        if (!isRunning) {
            setIsStart(true);
            idtime.current = setInterval(() => {
                dispatch(updateTime())
            }, 10)
        } else {
            setIsStart(false);
            clearInterval(idtime.current);
        }
    }
    return <div>
        <div>
            <Clock time={clock} />
            <div>
                <Button onClick={handleLap} disabled={!isStart} buttonName="Lap" />
                {!isStart && <Button onClick={() => handleStart(isStart)} disabled={false} buttonName="Start" />}
                {isStart && <Button onClick={() => { handleStart(isStart) }} disabled={false} buttonName="Stop" />}
                <Button onClick={handleReset} disabled={isStart} buttonName="Reset" />
            </div>
        </div>
        <div>
            <Laps laps={laps} />
        </div>
    </div>;
}

export default Home;