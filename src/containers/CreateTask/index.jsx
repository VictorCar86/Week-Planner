import React, { useRef, useState } from 'react';
import './index.scss';

const CreateTask = () => {
    const currentDate = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const [currentColor, setCurrentColor] = useState('');
    const radioColors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'violet'];

    const formRef = useRef(null);

    function postTask() {
        const formData = new FormData(formRef.current);

        const taskPayload = {
            name: formData.get('task_name'),
            maxDate: formData.get('maximum_date'),
            color: currentColor,
        };

        console.log(taskPayload)

        // if (taskPayload.name === '') {
        //     setFormMistakes(prev => ({ ...prev, name: true }));
        // }
        // else {
        //     setFormMistakes(prev => ({ ...prev, name: false }));
        // }

        // if (taskPayload.description.length >= 1 && taskPayload.description.length < 20) {
        //     setFormMistakes(prev => ({ ...prev, description: true }));
        // }
        // else {
        //     setFormMistakes(prev => ({ ...prev, description: false }));
        // }


        return;

        const fetchOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskPayload),
        };

        fetch('http://localhost:8787/api/v1/tasks', fetchOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <section className='create-task-container'>
            <p className='create-task-cocntainer__title'>Create your task</p>

            <form className='create-task-container__form' action='POST' ref={formRef}>
                <label htmlFor='goal_name'>
                    <p>Task name</p>
                    <input type='text' placeholder='Task name' name='task_name'/>
                </label>

                <p>Task color</p>

                <div className='create-task-container__form__labels-container'>
                    {radioColors.map((color, index) => (
                        <label
                            className='labels-container__radio-labels'
                            htmlFor={`task_color_${color}`}
                            key={index}
                        >
                            <span className={`labels-container__radio-labels__radio-color ${currentColor === color && 'radio-selected'}`}>
                                <span style={{backgroundColor: color}}>{/*Inside color*/}</span>
                            </span>
                            <input
                                className='labels-container__radio-labels__radio-input'
                                onClick={(radio) => setCurrentColor(radio.target.value)}
                                id={`task_color_${color}`}
                                name='task_color'
                                value={color}
                                type='radio'
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

            <button type='submit' onClick={postTask}>CLICK</button>
        </section>
    )
}

export default CreateTask;