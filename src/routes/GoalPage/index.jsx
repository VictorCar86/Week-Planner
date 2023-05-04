import React, { useEffect, useMemo, useState } from 'react';
import { RiAddFill, RiCalendarTodoFill, RiEdit2Fill } from 'react-icons/ri';
import MainTasksList from '../../containers/MainTasksList';
import TaskDayItem from '../../components/TaskDayItem';
import GenericModal from '../../modals/GenericModal';
import CreateTask from '../../containers/CreateTask';
import { Toaster } from 'sonner';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';
import { tasksState } from '../../context/sliceTasks';
import GenericButton from '../../components/GenericButton';

const GoalPage = () => {
    const { tasks } = useSelector(tasksState);
    const navigator = useNavigate();
    const { goalId } = useParams();

    useEffect(() => {
        if (!Number(goalId)){
            navigator('/goals');
        }
    }, []);

    const [modalCreateTask, setModalCreateTask] = useState({ open: false, animation: false });

    const tasksCompleted = useMemo(() => {
        if (tasks.length !== 0){
            const defaultValue = 0;
            const reducedStatus = tasks.reduce((accumulator, current) => {
                if (current.status === 'Completed') return accumulator += 1;
                else return accumulator;
            }, 0) ?? defaultValue;
            return (reducedStatus / tasks.length) * 100;
        }
    }, [tasks]);

    return (
      <>
        <div className='goal-page-divisor'>
            <main className='goal-page-main'>
                <header className='goal-page-header'>
                    <p className='goal-page-header__name'>*Goal Name*</p>
                    <article className='goal-page-header__tasks-info-container'>
                        <span className='goal-page-header__tasks-info-container__progress-container'>
                            <div className='goal-page-header__tasks-info-container__progress-container__percentage-container'>
                                <span role='progressbar' style={{ width: `${tasksCompleted}%` }}/>
                            </div>
                            <p>{tasksCompleted}% Tasks Completed</p>
                        </span>
                        <GenericButton
                            IconSvg={<RiEdit2Fill/>}
                            text='Edit Goal'
                        />
                    </article>
                </header>

                <section className='goal-page-tasks-section'>
                    <header className='goal-page-tasks-section__header'>
                        <span className='goal-page-tasks-section__header__title'>
                            Goal Tasks
                        </span>
                        <GenericButton
                            onClick={() => setModalCreateTask({ open: true, animation: true })}
                            IconSvg={<RiAddFill/>}
                            text='Add New Task'
                        />
                    </header>

                    {Number(goalId) && (
                        <MainTasksList goalId={goalId} />
                    )}
                </section>

                <section>
                    <p>Time used</p>

                    <ul>
                        <li>time</li>
                        <li>time</li>
                        <li>time</li>
                        <li>time</li>
                    </ul>
                </section>
            </main>
            <aside className='goal-page-schedule-container'>
                <header className='goal-page-schedule-container__header'>
                    <span>
                        <RiCalendarTodoFill />
                    </span>
                    <p>Upcoming Schedule</p>
                </header>

                <section className='goal-page-schedule-container__days-list'>
                    <ol>
                        { [...Array(4).keys()].map(i => <TaskDayItem key={i} />) }
                    </ol>
                </section>
            </aside>
        </div>

        {modalCreateTask.open && (
            <GenericModal modalState={modalCreateTask} setModalState={setModalCreateTask}>
                <CreateTask goalId={goalId} closeModal={() => setModalCreateTask(prev => ( {...prev, animation: false} ))}/>
            </GenericModal>
        )}

        <Toaster richColors position='top-center'/>
      </>
    )
};

export default GoalPage;