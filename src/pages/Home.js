import './styles/Home.css';
import {useNavigate} from "react-router";

export default function Home() {
    const navigation = useNavigate();

    return (
        <div className='home-page'>
            <div className='home-banner'>
                <h1>Bun Venit!</h1>
            </div>
            <div className='home-body'>
                <div className='home-option-top'>
                    <div className='button' onClick={() => navigation('/legislatie')}>
                        <img src={require('../assets/police.png')}/>
                        <h3>Codul Rutier</h3>
                    </div>
                </div>
                <div className='home-option-bottom'>
                    <div className='button' onClick={() => navigation('/quiz')}>
                        <img src={require('../assets/quiz.png')}/>
                        <h3>Chestionare Auto</h3>
                    </div>
                </div>
                <div className='home-option-top'>
                    <div className='button' onClick={() => navigation('/semne')}>
                        <img src={require('../assets/stop-sign.png')}/>
                        <h3>Indicatoare Rutiere</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}