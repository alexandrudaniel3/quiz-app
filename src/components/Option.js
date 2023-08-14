import React from "react";

export default function Option({optionKey, optionValue, isSelected, clickHandler}) {
    const buttonStyle = {
        backgroundColor: isSelected ? 'green' : 'initial'
    };
    return (
        <div className='option-container'>
            <button className='option' style={buttonStyle}  onClick={(e) => clickHandler(optionKey)}>
                <p>{optionKey + ": " + optionValue}</p>
            </button>
        </div>
    );
}