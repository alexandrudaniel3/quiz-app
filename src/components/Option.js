import React from "react";
import './styles/Option.css';

export default function Option({optionKey, optionValue, isSelected, clickHandler}) {
    return (
        <div className='option-container'>
            <button className={isSelected ? 'option chosen-option' : 'option'} onClick={(e) => clickHandler(optionKey)}>
                    <p className='option-key'>{optionKey}</p>
                    <p className='option-value'>{optionValue}</p>
            </button>
        </div>
    );
}