import React, { useRef, useState } from 'react';
import './index.scss';
import FormError from '../../components/FormError';

const CreateGoal = () => {
    const currentDate = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const [formMistakes, setFormMistakes] = useState({ name: false, description: false });

    const formRef = useRef(null);

    function postGoal() {
        const formData = new FormData(formRef.current);

        const goalPayload = {
            name: formData.get('goal_name'),
            description: formData.get('goal_description'),
            limitDate: formData.get('goal_limit_date'),
        };

        if (goalPayload.name === '') {
            setFormMistakes(prev => ({ ...prev, name: true }));
        }
        else {
            setFormMistakes(prev => ({ ...prev, name: false }));
        }

        if (goalPayload.description.length >= 1 && goalPayload.description.length < 20) {
            setFormMistakes(prev => ({ ...prev, description: true }));
        }
        else {
            setFormMistakes(prev => ({ ...prev, description: false }));
        }


        return;

        console.log("🚀 ~ file: index.jsx:16 ~ postGoal ~ goalPayload:", goalPayload);

        const fetchOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(goalPayload),
        };

        fetch('http://localhost:8787/api/v1/goals', fetchOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <section className='create-goal-container'>
        <p className='create-goal-container__title'>Create your goal</p>

        <form className='create-goal-container__form' action='POST' ref={formRef}>
            <label htmlFor='goal_name'>
                <p>Goal name</p>
                <input className={`create-goal-container__form__input ${formMistakes.name && 'create-goal-container__form__input--error'}`} type='text' placeholder='Goal name' name='goal_name'/>
                <p className='create-goal-container__form__tips'>Required</p>
            </label>

            <br />

            <label htmlFor='goal_description'>
                <p>Description</p>
                <textarea className={`create-goal-container__form__input ${formMistakes.description && 'create-goal-container__form__input--error'}`} placeholder='Description' name='goal_description'/>
                <p className='create-goal-container__form__tips'>Optional</p>
            </label>

            <br />

            <label htmlFor='goal_limit_date'>
                <p>Limit date</p>
                <input className='create-goal-container__form__input' type='datetime-local' name='goal_limit_date' min={currentDate}/>
                <p className='create-goal-container__form__tips'>Optional but recommended</p>
            </label>
        </form>

        {formMistakes.name && (
            <FormError text='Please introduce a name for your goal' />
        )}

        {formMistakes.description && (
            <FormError text='Descriptions can only be minimum 20 characters' />
        )}

        <button type='submit' onClick={postGoal}>CLICK</button>
        </section>
    )
}

export default CreateGoal;