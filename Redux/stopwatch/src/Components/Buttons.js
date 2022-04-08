import React from 'react';

function Button(props) {
    return <button onClick={props.onClick} className={props.className} disabled={props.disabled}>
        {props.buttonName}
    </button>;
}

export default Button;