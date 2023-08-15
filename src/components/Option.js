import React from "react";
import './styles/Option.css';

export default function Option({optionKey, optionValue, isSelected, clickHandler}) {
    const buttonStyle = {
        backgroundColor: isSelected ? 'lightgray' : 'white'
    };
    return (
        <div className='option-container'>
            <button className='option' style={buttonStyle} onClick={(e) => clickHandler(optionKey)}>
                    <p className='option-key'>{optionKey}</p>
                    <p className='option-value'>{optionValue}</p>
            </button>
        </div>
    );
}