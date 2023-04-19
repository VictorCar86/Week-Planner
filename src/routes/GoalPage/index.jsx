import React from 'react';
import './index.scss';
import MainTasksList from '../../containers/MainTasksList';

const GoalPage = () => {
    return (
      <>
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
        <main>
            <section className='goal-page-tasks-section'>
                <p className='goal-page-tasks-section__title'>Goal Tasks</p>
                <MainTasksList goalId={1} />
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
      </>
    )
};

export default GoalPage;