import React, { useRef, useState } from 'react';
import './index.scss';

const CreateTask = () => {
    const currentDate = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const [currentColor, setCurrentColor] = useState('');
    const radioColors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'violet'];

    const formRef = useRef(null);

    return (
        <section className='creationTask creationGoal'>
            <p className='creationGoal__title'>Create your task</p>

            <form className='creationTask__form' action='POST' ref={formRef}>
                <label htmlFor='goal_name'>
                    <p>Task name</p>
                    <input type='text' placeholder='Task name' name='task_name'/>
                </label>

                <p>Task color</p>

                <div className='creationTask__form__labelsContainer'>
                    {radioColors.map((color, index) => (
                        <label
                            className='creationTask__form__labelsContainer__radioLabels'
                            htmlFor={`task_color_${color}`}
                            key={index}
                        >
                            <span className={`creationTask__form__labelsContainer__radioLabels__radioColor ${currentColor === color && 'radioSelected'}`}>
                            <span style={{backgroundColor: color}}>{/*Inside color*/}</span>
                            </span>
                            <input
                                className='creationTask__form__labelsContainer__radioLabels__radioInput'
                                onClick={(radio) => setCurrentColor(radio.target.value)}
                                id={`task_color_${color}`}
                                type='radio'
                                value={color}
                                name='task_color'
                            />
                        </label>
                    ))}
                </div>

                <label htmlFor='goal_name'>
                    <p>Maximum date</p>
                    <input
                        type='datetime-local'
                        name='maximum_date'
                        min={currentDate}
                    />
                </label>
            </form>

            <button onClick={() => console.log(new FormData(formRef.current).get('task_color'))}>CLICK</button>
        </section>
    )
}

export default CreateTask;