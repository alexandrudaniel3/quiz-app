import './styles/Signs.css';
import signsData from "../signsData";
import ZoneCard from "../components/ZoneCard";
import {useNavigate, useParams} from "react-router";
import Banner from "../components/Banner";
import WhiteCard from "../components/WhiteCard";

export default function Signs() {
    const params = useParams();
    const navigation = useNavigate();

    const getCategories = () => {
        return signsData.map((element, index) => {
            return (<div className='grid-item' key={element.id}>
                    <ZoneCard
                        title={element.title}
                        source={require(`../assets/indicatoare/${element.id}/${element.content[0].id}.png`)}
                        width={'260px'}
                        clickHandler={() => navigation('/semne/' + element.id)}
                    />
                </div>
            )
        })
    }

    const getSignsForCategory = () => {
        if (!params.category) {
            return;
        }

        return signsData.find((element) => element.id === params.category)
            .content.map((element, index) => {
                return (
                    <div className='list-item' key={element.id}>
                        <WhiteCard
                            title={element.title}
                            source={require(`../assets/indicatoare/${params.category}/${element.id}.png`)}
                            width={'150px'}
                            description={element.description}
                        />
                    </div>
                )
            })
    }

    const displayContent = () => {
        if (!params.category) {
            return (<div className='categories-grid'>
                    {getCategories()}
                </div>
            )
        } else {
            return (
                <div className='signs-list'>
                    {getSignsForCategory()}
                </div>
            )
        }
    }


    return (
        <div className='signs-page'>
            <Banner
                title={'Indicatoare Rutiere'}
                backButtonHandler={params.category ? (() => navigation('/semne')) : () => navigation('/')}
            />
            {displayContent()}

        </div>
    )
}