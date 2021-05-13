import React, {useState } from 'react';
import "./Eightball.css"

function randAnswer(arr) {
    const answer = Math.floor(Math.random() * arr.length)
    return arr[answer]
}

const Eightball = ({ answers }) => {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    function changeBall() {
        const { msg, color } = randAnswer(answers);
        setMsg(msg);
        setColor(color);
    }

    return (
        <div className='eight-ball' onClick={changeBall}  style={{ backgroundColor: color}}>
            <p className='answer-text'>{msg}</p>
        </div>
    );
}

export default Eightball;