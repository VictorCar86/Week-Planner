import React from 'react';
import GoalsList from '../../utils/GoalsListClass';
import WeekGoal from '../../utils/WeekGoalClass';
import './index.scss';

const ListGoalsPage = () => {
  const configGoal = {
    name: 'Exercise',
    description: 'Do things',
    color: '#ffffff',
    headLine: new Date().getDate(),
  };

  const goal = new WeekGoal(configGoal);

  const listGoals = new GoalsList;
  const listGoals2 = new GoalsList;

  function addNewGoal(){
    listGoals.addGoal(goal);
    // finalList.forEach(e => console.log(e))
    console.log(finalList, listGoals2.list);
  }

  const finalList = listGoals.list;

  return (
    <section className='goalList'>
      {finalList.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem vel</p>
      <button onClick={addNewGoal} type='button'>Añadir meta</button>
    </section>
  )
}

export default ListGoalsPage;