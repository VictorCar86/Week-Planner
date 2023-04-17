import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { monthNames } from '../../utils/weekDate';
import MainGoalsList from '../../containers/MainGoalsList';
import './index.scss';

const ListGoalsPage = () => {
    const currentDate = new Date();
    const monthName = Object.keys(monthNames)[currentDate.getMonth()];
    const stringDate = `${currentDate.getDate()} ${monthName} ${currentDate.getFullYear()}`;

    return (
        <>
        <main>
            <section className='goals-section'>
                <header className='goals-section__header'>
                    <span>
                        <h1>Your Goals 🎯</h1>
                        <p>{stringDate}</p>
                    </span>

                    <span>
                        <button className='goals-section__header__button' type='button'>
                            Add New Goal
                        </button>

                        <button className='goals-section__header__button' type='button'>
                            <BiSearchAlt />
                        </button>
                    </span>
                </header>

                {/* <div className='goals-section__not-found-container'>
                    <img
                        src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Notes"
                    />
                    <p>There's no goals scheduled yet</p>
                </div> */}

                <MainGoalsList />

            </section>
        </main>
        </>
    )
}

export default ListGoalsPage;