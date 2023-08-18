import './styles/Legislation.css';
import {Collapse} from "antd";
import legislationData from "../legislationData";
import Banner from "../components/Banner";
import {useNavigate} from "react-router";


export default function Legislation() {
    const navigation = useNavigate();

    const items = legislationData.map((element, index) => {
        return {
            key: index,
            label: element.title,
            children: <p>{element.body}</p>
        }
    })

    return (
        <div className='legislation-page'>
            <Banner
                title={'Codul Rutier'}
                backButtonHandler={() => navigation('/')}
            />
            <Collapse accordion={true} items={items}/>
        </div>
    )
}