import React, { useEffect, useState } from 'react';
import { BiXCircle } from 'react-icons/bi';
import './index.scss';

const GenericModal = ({ children, closeModal, setToggleModal }) => {
    const [closeAnimation, setCloseAnimation] = useState(false);

    function beforeCloseModal(){
        setCloseAnimation(true);
        const timeout = setTimeout(() => {
            closeModal();
            clearTimeout(timeout);
        }, 350);
    }

    useEffect(() => {
        setToggleModal(beforeCloseModal);
    }, []);

    return (
        <article className={`generic-modal-container ${closeAnimation ? "generic-modal-container--close-modal" : "generic-modal-container--open-modal"}`}>
            <div className='generic-modal-container__content'>
                <button className='generic-modal-container__content__close-btn' onClick={beforeCloseModal}>
                    <BiXCircle/>
                </button>

                { children }

            </div>
        </article>
    )
};

export default GenericModal;