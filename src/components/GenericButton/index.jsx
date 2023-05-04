import React from 'react';
import './index.scss';

const GenericButton = ({ onClick, type = 'button', IconSvg, text = '' }) => {
  return (
    <button
        className='generic-button'
        type={type}
        onClick={onClick}
    >
        { IconSvg }
        <span>{ text }</span>
    </button>
  )
}

export default GenericButton;