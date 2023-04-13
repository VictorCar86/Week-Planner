import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import './index.scss';

const FormError = ({ text = "" }) => {
    return (
        <article className='form-error-container'>
            <RiErrorWarningFill className='form-error-container__svg' />
            <span className='form-error-container__text'>
                { text }
            </span>
        </article>
    )
}

export default FormError;