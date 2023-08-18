import './styles/BackButton.css';

export default function BackButton({clickHandler}) {
    return (
        <div className='back-button-container'>
            <div className='back-button-wrapper' onClick={clickHandler}>
                <h1 className='back-button-text'>Înapoi</h1>
            </div>
        </div>
    );
}