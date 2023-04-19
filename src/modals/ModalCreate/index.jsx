import React from 'react';
import { BiXCircle } from 'react-icons/bi';
import './index.scss';

const ModalCreate = ({ children, closeModal }) => {
    return (
        <article className='modal-create-container'>
            <div className='modal-create-container__content'>
                <button className='modal-create-container__content__close-btn' onClick={closeModal}>
                    <BiXCircle/>
                </button>

                { children }

            </div>
        </article>
    )
};

export default ModalCreate;