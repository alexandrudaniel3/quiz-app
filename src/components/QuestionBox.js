import React, {useEffect, useState} from "react";
import Option from "./Option";
import './styles/QuestionBox.css';
import ImagePopup from "./ImagePopup";

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export default function QuestionBox({data, submitHandler, skipHandler}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [imageIsHovered, setImageIsHovered] = useState(false);
    const [displayNoAnswerWarning, setDisplayNoAnswerWarning] = useState(false);
    const answer = data.correctAnswers;

    useEffect(() => {
        setSelectedOptions([]);
    }, [data]);
    const selectOption = (selectedOption, target) => {
        setDisplayNoAnswerWarning(false);
        if (selectedOptions.includes(selectedOption)) {
            setSelectedOptions((currentSelectedOptions) => {
                return currentSelectedOptions.filter(option => option !== selectedOption);
            });
        } else {
            setSelectedOptions((currentSelectedOptions) => [...currentSelectedOptions, selectedOption]);
        }
    }

    const checkAnswer = () => {
        if (arrayEquals(answer.sort(), selectedOptions.sort())) {
            // alert(answer + '\n' + selectedOptions + '\n' + arrayEquals(answer.sort(), selectedOptions.sort()) + '-true');
            return true;
        } else {
            // alert(answer + '\n' + selectedOptions + '\n' + arrayEquals(answer.sort(), selectedOptions.sort()) + '-false');
            return false;
        }
    }

    const showImage = () => {
        if (!data.image) {
            return;
        } else {
            return (
                <div className='question-image-container'>
                    <img className='question-image'
                         src={require(`../assets/${data.id}.jpeg`)}
                         onClick={() => setShowPopup(true)}
                    //     onMouseEnter={() => setImageIsHovered(true)}
                    // onMouseLeave={() => setImageIsHovered(false)}
                    />
                </div>
            )
        }
    }

    const showImagePopup = () => {
        if (!showPopup) {
            return;
        } else {
            return <ImagePopup
                source={require(`../assets/${data.id}.jpeg`)}
                closeHandler={() => {
                    setShowPopup(false);
                }}/>
        }
    }

    const showMagnifyingGlass = () => {
        if (!imageIsHovered) {
            return;
        } else {
            return (<div className='magnifying-glass-container'>
                <img className='magnifying-glass' src={require(`../assets/zoom-icon.png`)} />
            </div>)
        }
    }

    const showAnswerWarning = () => {
        if (displayNoAnswerWarning) {
            return (
                <p>Selectează cel puțin un răspuns pentru a trimite.</p>
            )
        }
    }

    return (
        <div className='question-box'>
            <div className='question-title-container'>
                <p>{data.question}</p>
            </div>
            <div className='question-data'>
                <div className='question-answers-container'>
                    {Object.keys(data.answers).map(optionKey => (
                        <Option
                            key={optionKey}
                            optionKey={optionKey}
                            optionValue={data.answers[optionKey]}
                            isSelected={selectedOptions.includes(optionKey)}
                            clickHandler={selectOption}
                        />
                    ))}
                </div>
                {showImage()}
                {showImagePopup()}
            </div>
            {showAnswerWarning()}
            <div className='buttons'>
                <div className='skip-question-button-container'>
                    <button className='skip-question-button' type='submit' onClick={skipHandler}>
                        Sari peste
                    </button>
                </div>
                <div className='submit-answers-button-container'>
                    <button className='submit-answers-button' type='submit' onClick={() => {
                        if (selectedOptions.length === 0) {
                            setDisplayNoAnswerWarning(true);
                        } else {
                            submitHandler(checkAnswer());
                        }
                    }}>
                        <span>Trimite</span>
                    </button>
                </div>
            </div>

        </div>
    )
}