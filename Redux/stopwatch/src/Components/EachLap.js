import React from 'react';

function Eachlap(props) {
    const index = props.index;
    const lap = props.lap;
    const laptime = props.laptime;
    return <tr>
        <td>{index + 1}</td>
        {
            index - 1 >= 0 ?
                <td>{("0" + Math.floor((laptime / 60000) % 60)).slice(-2)} : {("0" + Math.floor((laptime / 1000) % 60)).slice(-2)} : {("0" + ((laptime / 10) % 100)).slice(-2)}</td> :
                <td>{("0" + Math.floor((lap / 60000) % 60)).slice(-2)} : {("0" + Math.floor((lap / 1000) % 60)).slice(-2)} : {("0" + ((lap / 10) % 100)).slice(-2)}</td>
        }
        <td>{("0" + Math.floor((lap / 60000) % 60)).slice(-2)} : {("0" + Math.floor((lap / 1000) % 60)).slice(-2)} : {("0" + ((lap / 10) % 100)).slice(-2)}</td>
    </tr>;
}

export default Eachlap;