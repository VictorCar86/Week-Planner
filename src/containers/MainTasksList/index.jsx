import React, { useEffect, useState } from 'react';
import ButtonMoreOptions from '../../components/ButtonMoreOptions';
import './index.scss';
import { toast } from 'sonner';

const MainTasksList = ({ goalId }) => {
    const [tasksArray, setTaskArray] = useState([]);

    function getTasksById() {
        const fetchOptions = {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        };

        fetch(`http://localhost:8787/api/v1/tasks/goal/${goalId}`, fetchOptions)
            .then(response => response.json())
            .then(response => setTaskArray(response))
            .catch(err => console.error(err));
    }

    useEffect(getTasksById, []);

    function deleteTask(taskId) {
        const fetchOptions = {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        };

        fetch(`http://localhost:8787/api/v1/tasks/${taskId}`, fetchOptions)
            .then(response => response.json())
            .then(response => {
                toast.success('Task deleted successfully 🔥');
                getTasksById();
            })
            .catch(err => toast.error('Something went wrong 😳', { description: err.message }));
    }

    const optionsList = [
        { name: 'Edit', funct: () => console.log('zzz') },
        { name: 'Delete', funct: deleteTask },
    ];

    return (
        <>
            <ul className='main-tasks-list-container'>
                {tasksArray.map((task, index) => (
                    <li className="main-tasks-list-container__item" style={{ backgroundColor: task.color }} key={index}>
                        <header>
                            <span>{ task.name }</span>
                            <ButtonMoreOptions options={optionsList} taskId={task.id} />
                        </header>

                        <p className='main-tasks-list-container__item__status'>
                            <span
                                style={{ backgroundColor: task.status === 'Complete' ? '#31da31' : '#ef1717'}}
                                role='status'
                            />
                            { task.status }
                        </p>

                        <p>{ task.maximumDate }</p>

                        <p>ID: { task.id }</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MainTasksList;