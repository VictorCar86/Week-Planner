import React, { useRef, useState } from 'react';
import FormError from '../../components/FormError';
import './index.scss';

const CreateTask = () => {
    const currentDate = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const [formMistakes, setFormMistakes] = useState({ name: false, color: false });

    const [currentColor, setCurrentColor] = useState('');
    const radioColors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'violet'];

    const formRef = useRef(null);

    function postTask() {
        const formData = new FormData(formRef.current);

        const taskPayload = {
            goalId: 1,
            name: formData.get('task_name'),
            maximumDate: formData.get('maximum_date'),
            color: currentColor,
        };
        // console.log("🚀 ~ file: index.jsx:23 ~ postTask ~ taskPayload:", taskPayload)

        const colorExist = taskPayload.color !== '';
        const nameExist = taskPayload.name !== '';

        setFormMistakes({ color: !colorExist, name: !nameExist });

        if (!colorExist || !nameExist) {
            return;
        }

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
            <p className='create-task-container__title'>Create your task</p>

            <form className='create-task-container__form' action='POST' ref={formRef}>
                <label htmlFor='task_name'>
                    <p>Task name</p>
                    <input
                        className={`create-task-container__form__generic-input ${formMistakes.name && 'input-error'}`}
                        type='text'
                        placeholder='Task name'
                        name='task_name'
                        id='task_name'
                    />
                    <p className='input-tip'>Required</p>
                </label>

                <div className='create-task-container__form__colors-container'>
                    <p>Task color</p>

                    <ul className={`labels-container ${formMistakes.color && 'radio-error'}`}>
                        {radioColors.map((color, index) => (
                            <li key={index}>
                                <label
                                    className='labels-container__radio-labels'
                                    htmlFor={`task_color_${color}`}
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
                            </li>
                        ))}
                    </ul>

                    <p className='input-tip'>Required</p>
                </div>

                <label htmlFor='task_max-date'>
                    <p>Maximum date</p>
                    <input
                        className='create-task-container__form__generic-input'
                        type='datetime-local'
                        name='maximum_date'
                        min={currentDate}
                        id='task_max-date'
                    />
                    <p className='input-tip'>Optional but recommended</p>
                </label>
            </form>

            {formMistakes.name && (
                <FormError text='Please introduce a name for your task' />
            )}

            {formMistakes.color && (
                <FormError text='Please select a color for your task' />
            )}

            <button type='submit' onClick={postTask}>CLICK</button>
        </section>
    )
}

export default CreateTask;