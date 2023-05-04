import React, { useRef, useState } from 'react';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { fetchGoals } from '../../context/sliceGoals';
import { RiAddFill } from 'react-icons/ri';
import FormError from '../../components/FormError';
import GenericButton from '../../components/GenericButton';
import './index.scss';

const CreateGoal = ({ closeModal }) => {
    const dispatcher = useDispatch();
    const currentDate = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

    const [formMistakes, setFormMistakes] = useState({ name: false, description: false });

    const formRef = useRef(null);

    function postGoal() {
        const formData = new FormData(formRef.current);

        const goalPayload = {
            name: formData.get('goal_name'),
            description: formData.get('goal_description'),
        };

        const limitDate = formData.get('goal_limit_date');
        if (limitDate !== '') goalPayload['limitDate'] = limitDate;

        const nameExist = goalPayload.name === '';
        const descBiggerThan1 = goalPayload.description.length >= 1;
        const descLessThan20 = goalPayload.description.length < 20;

        setFormMistakes({ name: nameExist, description: (descBiggerThan1 && descLessThan20) });

        if (nameExist || (descBiggerThan1 && descLessThan20)){
            return;
        }

        const fetchConfig = {
            body: goalPayload,
            onSuccess: () => {
                toast.success('Task have been created! 📅');
                const timeout = setTimeout(() => {
                    closeModal();
                    fetchGoals.GET(dispatcher);
                    clearTimeout(timeout);
                }, 1500);
            },
            onError: (err) => {
                toast.error('Something went wrong 😳', { description: err });
            }
        };

        fetchGoals.POST(fetchConfig);
    }

    return (
        <section className='create-goal-container'>
            <p className='create-goal-container__title'>Create your goal</p>

            <form className='create-goal-container__form' action='POST' ref={formRef}>
                <label htmlFor='goal_name'>
                    <p>Goal name</p>
                    <input
                        className={`create-goal-container__form__input ${formMistakes.name && 'input-error'}`}
                        placeholder='Goal name'
                        type='text'
                        name='goal_name'
                        id='goal_name'
                    />
                    <p className='input-tip'>Required</p>
                </label>

                <br />

                <label htmlFor='goal_description'>
                    <p>Description</p>
                    <textarea
                        className={`create-goal-container__form__input ${formMistakes.description && 'input-error'}`}
                        placeholder='Description'
                        name='goal_description'
                        id='goal_description'
                    />
                    <p className='input-tip'>Optional</p>
                </label>

                <br />

                <label htmlFor='goal_limit_date'>
                    <p>Limit date</p>
                    <input
                        className='create-goal-container__form__input'
                        type='datetime-local'
                        id='goal_limit_date'
                        name='goal_limit_date'
                        min={currentDate}
                    />
                    <p className='input-tip'>Optional but recommended</p>
                </label>
            </form>

            {formMistakes.name && (
                <FormError text='Please introduce a name for your goal' />
            )}

            {formMistakes.description && (
                <FormError text='Descriptions can only be minimum 20 characters' />
            )}

            <GenericButton
                onClick={postGoal}
                IconSvg={<RiAddFill/>}
                type='submit'
                text='Create Goal'
            />
        </section>
    )
}

export default CreateGoal;