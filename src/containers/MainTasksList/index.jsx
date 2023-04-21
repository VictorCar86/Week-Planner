import React, { useEffect, useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import './index.scss';

const MainTasksList = ({ goalId }) => {
    const [tasksArray, setTaskArray] = useState([]);

    useEffect(() => {
        const fetchOptions = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        };

        fetch(`http://localhost:8787/api/v1/tasks/goal/${goalId}`, fetchOptions)
            .then(response => response.json())
            .then(response => setTaskArray(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <ul className='main-tasks-list-container'>
            {tasksArray.map((goal, index) => (
                <li className="main-tasks-list-container__item" style={{ backgroundColor: goal.color }} key={index}>
                    <header>
                        <span>{ goal.name }</span>

                        <button type='button'>
                            <RiMore2Fill />
                        </button>
                    </header>

                    <p className='main-tasks-list-container__item__status'>
                        <span
                            style={{ backgroundColor: goal.status === 'Complete' ? '#31da31' : '#ef1717'}}
                            role='status'
                        />
                        { goal.status }
                    </p>

                    <p>{ goal.maximumDate }</p>

                    <p>ID: { goal.id }</p>
                </li>
            ))}
        </ul>
    )
}

export default MainTasksList;