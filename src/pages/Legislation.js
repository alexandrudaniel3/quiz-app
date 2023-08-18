import './styles/Legislation.css';
import {Collapse} from "antd";
import legislationData from "../legislationData";
import BackButton from "../components/BackButton";


export default function Legislation() {
    const items = legislationData.map((element, index) => {
        return {
            key: index,
            label: element.title,
            children: <p>{element.body}</p>
        }
    })

    return (
        <div className='legislation-page'>
            <div className='legislation-banner'>
                <BackButton />
                <h1 className='legislation-title'>Lorem ipsum</h1>
            </div>
            <Collapse accordion={true} items={items}/>
        </div>
    )
}