import BackButton from "./BackButton";
import './styles/Banner.css';

export default function Banner({title ,backButtonHandler}) {
    return (
        <div className='banner'>
            <BackButton clickHandler={backButtonHandler}/>
            <h1 className='banner-title'>{title}</h1>
        </div>
    )
}