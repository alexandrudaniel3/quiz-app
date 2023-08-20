import BackButton from "./BackButton";
import './styles/Banner.css';

export default function Banner({title, backButtonHandler}) {
    return (
        <div className='banner'>
            <h1 className='banner-title'>{title}</h1>
            <BackButton clickHandler={backButtonHandler}/>
        </div>
    )
}