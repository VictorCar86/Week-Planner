import React, { useEffect, useState } from 'react';
import ButtonMoreOptions from '../../components/ButtonMoreOptions';
import './index.scss';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, tasksState } from '../../context/sliceTasks';

const MainTasksList = ({ goalId }) => {
    const dispatcher = useDispatch();
    const { tasks } = useSelector(tasksState);

    useEffect(() => {
        fetchTasks.GET(goalId, dispatcher);
        return () => false;
    }, []);

    function deleteTask(taskId) {
        const fetchConfig = {
            taskId,
            onSuccess: () => {
                toast.success('Task deleted successfully 🔥');
                fetchTasks.GET(goalId, dispatcher);
            },
            onError: (err) => {
                toast.error('Something went wrong 😳', { description: err.message });
            },
        };

        fetchTasks.DELETE(fetchConfig);
    }

    const optionsList = [
        { name: 'Edit', funct: () => console.log('zzz') },
        { name: 'Delete', funct: deleteTask },
    ];

    return (
        <>
            <ul className='main-tasks-list-container'>
                {tasks.map((task, index) => (
                    <li className="main-tasks-list-container__item" style={{ backgroundColor: task.color }} key={index}>
                        <header>
                            <span>{ task.name }</span>
                            <ButtonMoreOptions options={optionsList} belongingId={task.id} />
                        </header>

                        <p className='main-tasks-list-container__item__status'>
                            <span
                                style={{ backgroundColor: task.status === 'Completed' ? '#31da31' : '#ef1717'}}
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