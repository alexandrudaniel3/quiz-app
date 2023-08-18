import React, {useEffect, useState} from "react";
import QuestionBox from "./QuestionBox";
import './styles/Quiz.css';
import {useTimer} from "react-timer-hook";
import testData from "../testData";
import Timer from "./Timer";
import Banner from "./Banner";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [data, setData] = useState([]);
    const [timeLeft, setTimeLeft] = useState(true);

    useEffect(() => {
        testData.sort(() => Math.random() - 0.5);
        setData(testData);
    }, []);

    const nextQuestion = () => {
        if (currentQuestion === data.length - 1) {
            showOver();
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const displayQuiz = () => {
        if (currentQuestion < data.length && timeLeft === true) {
            return showQuestion();
        } else {
            return showOver();
        }
    }

    const skipQuestion = () => {
        setData(currentQuestions => [...currentQuestions, data[currentQuestion]]);
        nextQuestion();
    }

    const showQuestion = () => {
        return (
            <QuestionBox
                data={data[currentQuestion]}
                submitHandler={(correct) => {
                    nextQuestion();
                    if (correct) {
                        setCorrectAnswers(correctAnswers + 1);
                    } else {
                        setWrongAnswers(wrongAnswers + 1);
                    }
                }}
                skipHandler={skipQuestion}/>
        )
    }

    const showOver = () => {
        const winner = correctAnswers >= 22;
        if (winner) {
            return showWinner();
        } else {
            return showLoser();
        }
    }

    const showWinner = () => {
        return (
            <div className='winner'>
                <div className='winner-announcement-container'>
                    <h1 className='winner-text'>
                        ADMIS!
                    </h1>
                </div>
            </div>
        )
    }

    const showLoser = () => {
        return (
            <div className='loser'>
                <div className='loser-announcement-container'>
                    <h1 className='loser-text'>
                        RESPINS!
                    </h1>
                </div>
            </div>
        )
    }

    return (
            <div className='quiz-container'>
                {<Timer timeOutHandler={() => setTimeLeft(false)}/>}
                {displayQuiz()}
                <div className='statistics-container'>
                    <div className='questions-left'>
                        Întrebări rămase:
                        <div className='number-container'>
                            <p>{data.length - currentQuestion}</p>
                        </div>
                    </div>
                    <div className='correct-answers'>
                        Răspunsuri corecte:
                        <div className='number-container'>
                            <p>{correctAnswers}</p>
                        </div>
                    </div>
                    <div className='wrong-answers'>
                        Răspunsuri greșite:
                        <div className='number-container'>
                            <p>{wrongAnswers}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}