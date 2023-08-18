import './styles/Header.css';
import {useNavigate} from "react-router";

export default function Header() {
    const navigation = useNavigate();
    return (
        <div className='header'>
            <div className='logo-container'>
                <h1 className='logo' onClick={() => navigation('/')}>Logo</h1>
            </div>
        </div>
    )
}