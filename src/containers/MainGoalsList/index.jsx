import React, { useEffect, useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import './index.scss';

const MainGoalsList = () => {
    const [goalsArray, setGoalArray] = useState([]);

    useEffect(() => {
        const fetchOptions = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        };

        fetch('http://localhost:8787/api/v1/goals', fetchOptions)
            .then(response => response.json())
            .then(response => setGoalArray(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <ul className='main-goals-list-container'>
            {goalsArray.map((goal, index) => (
                <li className="main-goals-list-container__item" key={index}>
                    <header>
                        <span>{ goal.name }</span>

                        <button type='button'>
                            <RiMore2Fill />
                        </button>
                    </header>

                    <p className='main-goals-list-container__item__description'>{ goal.description }</p>

                    <p>{ goal.limitDate }</p>

                    <p>ID: { goal.id }</p>

                    <p>30 Tasks</p>
                </li>
            ))}
        </ul>
    )
}

export default MainGoalsList;