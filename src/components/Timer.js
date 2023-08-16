import {useTimer} from "react-timer-hook";
import React from "react";
import './styles/Timer.css';

export default function Timer({timeOutHandler}) {
    const timeOut = new Date();
    timeOut.setMinutes(timeOut.getMinutes() + 30);

    const {
        seconds,
        minutes,
    } = useTimer({ expiryTimestamp: timeOut.getTime(), onExpire: timeOutHandler });

    return(
        <div className='timer'>
            <p>Timp rămas:</p>
            <p>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</p>
        </div>

    )
}