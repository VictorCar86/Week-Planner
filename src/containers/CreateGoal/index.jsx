import React, { useRef } from 'react';
import './index.scss';

const CreateGoal = () => {
    const currentDate = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const formRef = useRef(null);

    function postGoal() {
        const formData = new FormData(formRef.current);

        const goalPayload = {
            name: formData.get('goal_name'),
            description: formData.get('goal_description'),
            limitDate: formData.get('goal_limit_date'),
        };

        if (goalPayload.name === '') {
            console.error('NAME')
        }
        if (goalPayload.description.length >= 1 && goalPayload.description.length < 20) {
            console.error('DESC')
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
        <section className='creationGoal'>
        <p className='creationGoal__title'>Create your goal</p>

        <form className='creationGoal__form' action='POST' ref={formRef}>
            <label htmlFor='goal_name'>
                <p>Goal name</p>
                <input type='text' placeholder='Goal name' name='goal_name'/>
                <p className='creationGoal__form__warning'>Required</p>
            </label>

            <br />

            <label htmlFor='goal_description'>
                <p>Description</p>
                <textarea placeholder='Description' name='goal_description'/>
                <p className='creationGoal__form__warning'>Optional</p>
            </label>

            <br />

            <label htmlFor='goal_limit_date'>
                <p>Limit date</p>
                <input type='datetime-local' name='goal_limit_date' min={currentDate}/>
                <p className='creationGoal__form__warning'>Optional but recommended</p>
            </label>
        </form>

        <br />

        <button onClick={postGoal}>CLICK</button>
        </section>
    )
}

export default CreateGoal;