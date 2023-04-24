import React, { useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import './index.scss';

const ButtonMoreOptions = () => {
    const [optModal, setOptModal] = useState(false);

    function toggleOptModal() {
        setOptModal(prev => !prev);
    }

    return (
        <article>
            <button className='button-more-options-container' type='button' onClick={toggleOptModal}>
                <RiMore2Fill />
            </button>
            {optModal && (
                <section className='button-more-options-container__modal-section'>
                    <ul className='button-more-options-container__modal-section__list'>
                        {[...Array(4).keys()].map(i => (
                            <li className='button-more-options-container__modal-section__list__item' key={i}>
                                <button type='button' onClick={() => console.log('XD')}>
                                    lorem ipsus lorem ipsus
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