import React from "react";
import './styles/ImagePopup.css';

export default function ImagePopup({source, closeHandler}) {
    const containerClickHandler = (event) => {
        event.stopPropagation();
    };
    return (
        <div className='image-popup-full' onClick={closeHandler}>
            <div className='image-popup-container' onClick={containerClickHandler}>
                <img className='image-popup' src={source}/>
                <div className='image-popup-back-button-container'>
                    <button className='image-popup-back-button' onClick={closeHandler}>Închide</button>
                </div>
            </div>

        </div>
    )
}