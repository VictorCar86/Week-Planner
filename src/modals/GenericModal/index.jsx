import React, { useEffect } from 'react';
import { BiXCircle } from 'react-icons/bi';
import './index.scss';

const GenericModal = ({ children, modalState, setModalState }) => {
    function beforeCloseModal(){
        const timeout = setTimeout(() => {
            setModalState(prev => ({...prev, open: false}));
            clearTimeout(timeout);
        }, 350);
    }

    useEffect(() => {
        if (!modalState.animation && modalState.open){
            beforeCloseModal();
        }
    }, [modalState.animation]);

    return (
        <article className={`generic-modal-container ${modalState.animation ? "generic-modal-container--open-modal" : "generic-modal-container--close-modal"}`}>
            <div className='generic-modal-container__content'>
                <button className='generic-modal-container__content__close-btn' onClick={() => setModalState(prev => ({...prev, animation: false}))}>
                    <BiXCircle/>
                </button>

                { children }

            </div>
        </article>
    )
};

export default GenericModal;