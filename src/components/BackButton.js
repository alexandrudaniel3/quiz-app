import './styles/BackButton.css';
import {useNavigate} from "react-router";

export default function BackButton() {
    const navigation = useNavigate();
    return (
        <div className='back-button-container' onClick={() => navigation('/')}>
            <h1 className='back-button-text'>Înapoi</h1>
        </div>
    );
}