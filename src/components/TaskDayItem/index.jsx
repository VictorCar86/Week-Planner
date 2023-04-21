import React from 'react';
import './index.scss';
import { monthNames } from '../../utils/weekDate';

const TaskDayItem = ({ dayTask, keyId }) => {
    const date = new Date();
    const dateString = `${Object.keys(monthNames)[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
        <li className='task-day-container' key={keyId}>
            <p className='task-day-container__date'>
                { dateString }
            </p>
            <ol className='task-day-container__days-list'>
                <li className='task-day-container__days-list__info-day'>
                    <span>10:00</span>
                    <span>Lorem Ipsus Dolor</span>
                </li>
                <li className='task-day-container__days-list__info-day'>
                    <span>10:00</span>
                    <span>Lorem Ipsus Dolor</span>
                </li>
            </ol>
        </li>
    )
}

export default TaskDayItem;