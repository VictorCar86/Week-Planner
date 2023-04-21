import React from 'react';
import { BiXCircle } from 'react-icons/bi';
import './index.scss';

const GenericModal = ({ children, closeModal }) => {
    return (
        <article className='generic-modal-container'>
            <div className='generic-modal-container__content'>
                <button className='generic-modal-container__content__close-btn' onClick={closeModal}>
                    <BiXCircle/>
                </button>

                { children }

            </div>
        </article>
    )
};

export default GenericModal;