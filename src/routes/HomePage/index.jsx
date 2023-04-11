import React from 'react';
import { daysFromMonth, weekDatesES, weekNames } from '../../utils/weekDate';
import './index.scss';

const HomePage = () => {
  const daysList = daysFromMonth('April');
  const daysEndingSunday = daysList.filter(day => {
    const nameOfDay = weekNames[day.getDay()];
    return nameOfDay === "sunday"
  });

  return (
    <>
      <main>
        <section className='calendarHomePage'>
          <ol className='calendaryDates'>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ol>

          <div className='calendaryDays'>
            {daysList.map((day, index) => {

              let currentWeek = 1;
              daysEndingSunday.forEach(sunday => {
                if (sunday.getDate() >= day.getDate())
                  return;
                if (sunday.getDate() < day.getDate())
                  currentWeek += 1
              });

              const nameOfDay = weekNames[day.getDay()];
              const currentDay = weekDatesES[nameOfDay];

              return (
                <button
                className='calendaryDays__card'
                  key={index}
                  type='button'
                  style={{gridArea: `${currentWeek} / ${currentDay}`}}
                >
                  <article>
                    <span>{day.getDate()}</span>
                  </article>
                </button>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage;