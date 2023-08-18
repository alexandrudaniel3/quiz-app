import logo from './logo.svg';
import './App.css';
import QuestionBox from "./components/QuestionBox";
import Quiz from "./pages/Quiz";
import Header from "./components/Header";
import Home from "./pages/Home";
import Legislation from "./pages/Legislation";
import {Route, Routes} from "react-router";
import Signs from "./pages/Signs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/legislatie' element={<Legislation/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/semne/' element={<Signs/>}/>
                <Route path='/semne/:category' element={<Signs/>}/>
            </Routes>
        </div>
    );
}

export default App;
