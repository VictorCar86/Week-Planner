import React, { useState } from 'react';
import { RiAddFill, RiCalendarTodoFill } from 'react-icons/ri';
import MainTasksList from '../../containers/MainTasksList';
import TaskDayItem from '../../components/TaskDayItem';
import './index.scss';
import GenericModal from '../../modals/GenericModal';
import CreateTask from '../../containers/CreateTask';
import { Toaster } from 'sonner';

const GoalPage = () => {
    const [taskModal, setTaskModal] = useState(false);

    function toggleTask() {
        setTaskModal(prev => !prev);
    }

    return (
      <>
        <div className='goal-page-divisor'>
            <main className='goal-page-main'>
                <header className='goal-page-header'>
                    <p className='goal-page-header__name'>*Goal Name*</p>
                    <span className='goal-page-header__tasks-info-container'>
                        <div className='goal-page-header__tasks-info-container__progress-container'>
                            <div role='progressbar'/>
                            <p>50% Tasks Completed</p>
                        </div>
                        <button type='button'>
                            Edit Goal
                        </button>
                    </span>
                </header>

                <section className='goal-page-tasks-section'>
                    <header className='goal-page-tasks-section__header'>
                        <span className='goal-page-tasks-section__header__title'>
                            Goal Tasks
                        </span>
                        <button
                            className='goal-page-tasks-section__header__btn'
                            type='button'
                            onClick={toggleTask}
                        >
                            <RiAddFill />
                            <span>Add New Task</span>
                        </button>
                    </header>

                    <MainTasksList goalId={5} />
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

        {taskModal && (
            <GenericModal closeModal={toggleTask}>
                <CreateTask goalId={5} closeModal={toggleTask}/>
            </GenericModal>
        )}

        <Toaster richColors position='top-center'/>
      </>
    )
};

export default GoalPage;