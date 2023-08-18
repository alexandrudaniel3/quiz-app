import './styles/Signs.css';
import signsData from "../signsData";
import ZoneCard from "../components/ZoneCard";
import {useNavigate, useParams} from "react-router";

export default function Signs() {
    const params = useParams();
    const navigation = useNavigate();

    const idk = '';
    const getCategories = () => {
        return signsData.map((element, index) => {
            return (<div className='grid-item'>
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
                    <div className='grid-item'>
                        <ZoneCard
                            title={element.title}
                            source={require(`../assets/indicatoare/${params.category}/${element.id}.png`)}
                            width={'260px'}
                        />
                    </div>
                )
            })
    }

    const displayContent = () => {
        if (!params.category) {
            return getCategories();
        } else {
            return getSignsForCategory();
        }
    }


    return (
        <div className='signs-page'>
            <div className='signs-banner'>
                <h1>Lorem ipsum</h1>
            </div>
            <div className='signs-grid'>
                {displayContent()}
            </div>
        </div>
    )
}