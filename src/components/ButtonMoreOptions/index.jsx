import React, { useEffect, useRef, useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import './index.scss';

const ButtonMoreOptions = ({ options = [], belongingId = -1 }) => {
    const [optModal, setOptModal] = useState(false);

    const optionsRef = useRef(false);

    function toggleOptModal(callback) {
        callback && callback(belongingId);
        setOptModal(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                toggleOptModal();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [optionsRef]);

    return (
        <article className='button-more-options-container'>
            <button className='button-more-options-container__button' type='button' onClick={() => toggleOptModal()}>
                <RiMore2Fill />
            </button>
            {optModal && (
                <section className='button-more-options-container__modal-section' ref={optionsRef}>
                    <ul className='button-more-options-container__modal-section__list'>
                        {options.map((option, index) => (
                            <li className='button-more-options-container__modal-section__list__item' key={index}>
                                <button type='button' onClick={() => toggleOptModal(option.funct)}>
                                    { option.name }
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    )
}

export default ButtonMoreOptions;