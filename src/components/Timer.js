import React, { useState, useRef, useEffect } from 'react';
import '../style/timer.css';

export default function Timer() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {

        const countdownDate = new Date('August 20, 2022 11:15:00').getTime();

        interval = setInterval(() => {

            const now = new Date().getTime();

            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) { clearInterval(interval.current); }

            else {

                setTimerDays(days);

                setTimerHours(hours);

                setTimerMinutes(minutes);

                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {

        startTimer();

        return () => {

            clearInterval(interval.current);
        }
    })

    return (
        <div className='timer-box'>
            <p>{timerDays}</p>
            <p>Days</p>
            <span>:</span>
            <p>{timerHours}</p>
            <p>Hours</p>
            <span>:</span>
            <p>{timerMinutes}</p>
            <p>Minutes</p>
            <span>:</span>
            <p>{timerSeconds}</p>
            <p>Seconds</p>
        </div>
    );
}