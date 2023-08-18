import './styles/WhiteCard.css';

export default function WhiteCard({title, source, width, description}) {
    return (
        <div className='white-card-container'>
            <div className='white-card'>
                <div className='white-card-left-side'>
                    <div className='white-card-image-container'>
                        <img
                            alt={title}
                            src={source}
                            width={width}
                            className='white-card-image'
                        />
                    </div>
                    <div className='white-card-title-container'>
                        <h3 className='white-card-title'>
                            {title}
                        </h3>
                    </div>
                </div>
                <div className='white-card-description-container'>
                    <p className='white-card-description'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}