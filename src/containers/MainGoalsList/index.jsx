import React, { useEffect } from 'react';
import ButtonMoreOptions from '../../components/ButtonMoreOptions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoals, goalsState } from '../../context/sliceGoals';
import './index.scss';

const MainGoalsList = () => {
    const { goals } = useSelector(goalsState);
    const dispatcher = useDispatch();

    useEffect(() => {
        fetchGoals.GET(dispatcher);
    }, []);

    const optionsList = [
        { name: 'Edit', funct: () => console.log('zzz') },
        { name: 'Delete', funct: () => fetchGoals.DELETE(dispatcher)},
    ];

    return (
        <ul className='main-goals-list-container'>
            {goals.map((goal, index) => (
                <li className="main-goals-list-container__item" key={index}>
                    <header>
                        <span>{ goal.name }</span>

                        <ButtonMoreOptions options={optionsList} belongingId={goal.id}/>
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