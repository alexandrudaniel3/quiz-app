import './styles/ZoneCard.css';

export default function ZoneCard({title, source, width, clickHandler}) {
    return (
        <div className='zone-card-container'>
            <div className='zone-card' onClick={clickHandler}>
                <div className='zone-card-image-container'>
                    <img
                        alt={title}
                        src={source}
                        width={width}
                        className='zone-card-image'
                        />
                </div>
                <div className='zone-card-title-container'>
                    <h1 className='zone-card-title'>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}