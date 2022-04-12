import React from 'react';
import Eachlap from './EachLap';
import './Laps.css'
function Laps(props) {
    const laps = props.laps;
    return <div className='laps'>
        {
            laps.length !== 0 &&
            <table>
                <thead><tr><th>LAP</th><th>LAP TIMING</th><th>OVERALL TIME</th></tr></thead>
                <tbody>
                    {
                        laps.map((lap, index) => {
                            var laptime = 0
                            if (index - 1 >= 0) {
                                const prevTime = laps[index - 1];
                                const curTime = lap;
                                laptime = curTime - prevTime;
                            }
                            return (
                                <Eachlap index={index} lap={lap} laptime={laptime} />
                            )
                        })
                    }
                </tbody>
            </table>
        }
    </div>;
}

export default Laps;