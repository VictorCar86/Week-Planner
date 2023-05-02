import React, { useEffect } from 'react';
import ButtonMoreOptions from '../../components/ButtonMoreOptions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoals, goalsState } from '../../context/sliceGoals';
import './index.scss';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const MainGoalsList = () => {
    const { goals } = useSelector(goalsState);
    const dispatcher = useDispatch();

    useEffect(() => {
        fetchGoals.GET(dispatcher);
    }, []);

    function deleteGoal(goalId) {
        const fetchConfig = {
            goalId,
            onSuccess: () => {
                toast.success("Goal deleted successfully! 🔥")
                fetchGoals.GET(dispatcher);
            },
            onError: () => toast.error("Something went wrong! 😳"),
        };
        fetchGoals.DELETE(fetchConfig);
    }

    const optionsList = [
        { name: 'Edit', funct: () => console.log('zzz') },
        { name: 'Delete', funct: deleteGoal},
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

                    <p>{ goal.tasks.length } Tasks</p>

                    <Link className='main-goals-list-container__item__link' to={`/goals/${goal.id}`}>
                        Watch tasks 📚
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MainGoalsList;