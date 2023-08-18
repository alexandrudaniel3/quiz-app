import './styles/QuizPage.css';
import Banner from "../components/Banner";
import {useNavigate, useParams} from "react-router";
import Quiz from "../components/Quiz";

export default function QuizPage() {
    const params = useParams();
    const navigation = useNavigate();
    const welcomeToQuiz = () => {
        return (
            <div className='quiz-page-welcome'>
                <div className='quiz-page-guide'>
                    <p>Veți primi un chestionar cu 26 de întrebări aleatorii. Aveți 30 de minute să răspundeți corect la
                        minimum 22 dintre acestea pentru a promova testul de antrenament.</p>
                    <p>Întrebările pot avea mai multe răspunsuri corecte și trebuie selectate toate acestea.</p>
                    <p>Fiind un test de antrenament, acesta va continua chiar dacă nu mai poate fi promovat (daca aveți
                        5 sau mai multe răspunsuri greșite).</p>
                    <p>Puteți sări peste o întrebare pentru a răspunde la aceasta mai târziu.</p>
                    <h3>Succes!</h3>
                </div>
                <div className='quiz-page-start-button-container'>
                    <button className='quiz-page-start-button' onClick={() => navigation('/quiz/test')}>
                        START
                    </button>
                </div>
            </div>
        )
    }

    const displayContent = () => {
        if (!params.state) {
            return welcomeToQuiz();
        } else if (params.state === 'test') {
            return <Quiz />;
        }
    }
    return (
        <div className='quiz-page'>
            <Banner
                title={'Chestionare Auto'}
            backButtonHandler={() => navigation('/')}/>
            {displayContent()}
        </div>
    )
}