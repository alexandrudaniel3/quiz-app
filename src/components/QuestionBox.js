import React, {useEffect, useState} from "react";
import Option from "./Option";
import './styles/QuestionBox.css';

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export default function QuestionBox({data, submitHandler, skipHandler}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const answer = data.correctAnswers;

    useEffect(() => {
        setSelectedOptions([]);
    }, [data]);
    const selectOption = (selectedOption, target) => {
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
                    <img className='question-image' src={require(`../assets/${data.id}.jpeg`)}/>
                </div>
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
            </div>
            <div className='buttons'>
                <div className='skip-question-button-container'>
                    <button className='skip-question-button' type='submit' onClick={skipHandler}>
                        Sari peste
                    </button>
                </div>
                <div className='submit-answers-button-container'>
                    <button className='submit-answers-button' type='submit' onClick={() => {
                        if (selectedOptions.length === 0) {
                            return;
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