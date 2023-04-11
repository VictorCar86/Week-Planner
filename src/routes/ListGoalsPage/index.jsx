import React from 'react';
import './index.scss';

const ListGoalsPage = () => {
  return (
    <>
      <main>
        <section className='noGoalsSection'>
            <h1>🎯 Your Goals</h1>

            <div className='noGoalsSection__notFoundContainer'>
                <img
                    src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Notes"
                />
                <p>There's no goals scheduled yet</p>

                <a href='/goals/create'>
                    <span>+</span>
                    <span> Create New Goal</span>
                </a>
            </div>
        </section>
      </main>
    </>
  )
}

export default ListGoalsPage;