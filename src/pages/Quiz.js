import React, {useEffect, useState} from "react";
import QuestionBox from "../components/QuestionBox";
import './styles/Quiz.css';
import {useTimer} from "react-timer-hook";
import Timer from "../components/Timer";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [data, setData] = useState([]);
    const [timeLeft, setTimeLeft] = useState(true);

    let testData = [
        {
            id: 1,
            question: 'Conducătorilor de vehicule le este interzis:',
            answers: {
                A: 'să profereze injurii;',
                B: 'să săvârşească acte sau gesturi obscene;',
                C: 'să adreseze celorlalţi participanţi la trafic expresii jignitoare sau vulgare.'
            },
            correctAnswers: ['A', 'B', 'C'],
            image: false,
            category: '',
        },
        {
            id: 2,
            question: 'Ce obligație îi revine conducătorului de vehicul care schimbă direcția de mers la dreapta, la semnalul verde al semaforului, în timp ce pietonii sunt angajați la rândul lor în traversare?:',
            answers: {
                A: 'să semnalizeze schimbarea direcției de mers și să acorde prioritate de trecere pietonilor angajați în traversarea străzii pe care urmează să intre, pe sensul său de mers;;',
                B: 'să semnalizeze schimbarea direcției de mers și să-și continue deplasarea cu prudență, pietonii fiind obligați să-i cedeze trecerea;;',
                C: 'să semnalizeze schimbarea direcției de mers și să păstreze o distanță laterală suficientă față de bordura din dreapta..'
            },
            correctAnswers: ['A'],
            image: false,
            // category: '',
        },
        {
            id: 3,
            question: 'Depăşirea vehiculelor pe drumurile publice este interzisă:',
            answers: {
                A: 'pe porţiunile de drum unde oprirea este interzisă;',
                B: 'în intersecţiile cu circulaţie nedirijată;',
                C: 'pe drumurile publice cu o singură bandă pe sens.'
            },
            correctAnswers: ['B'],
            image: false,
            // category: '',
        },
        {
            id: 4,
            question: 'Care este limita maximă de viteză în localităţi?',
            answers: {
                A: '60 km/h;',
                B: '50 km/h;',
                C: '40 km/h;'
            },
            correctAnswers: ['B'],
            image: false,
            // category: '',
        },
        {
            id: 5,
            question: 'În care dintre următoarele situaţii sunteţi obligat să circulaţi cu o viteză care să nu depăşească 30 km/h în localităţi?',
            answers: {
                A: 'într-o zonă rezidenţială, semnalizată ca atare; ',
                B: 'la trecerea prin intersecţiile cu circulaţie nedirijată; ',
                C: 'într-o zonă pietonală, semnalizată ca atare.'
            },
            correctAnswers: ['B'],
            image: false,
            // category: '',
        },
        {
            id: 6,
            question: 'Semnificația indicatorului și a panoului adițional este:',
            answers: {
                A: 'zonă de oprire permisă pentru cel mult 30 de minute',
                B: 'zonă de staționare permisă pentru cel mult 30 de minute',
                C: 'oprirea și staționarea sunt interzise'
            },
            correctAnswers: ['B'],
            image: true,
            // category: '',
        },
        {
            id: 7,
            question: 'La întâlnirea indicatorului aveți obligația:',
            answers: {
                A: 'de a circula cu atenție, deoarece urmează o curbă la stânga',
                B: 'de a reduce viteza, deoarece urmează o intersecție periculoasă',
                C: 'de a schimba obligatoriu direcția de mers spre stânga'
            },
            correctAnswers: ['A'],
            image: true,
            // category: '',
        },
        {
            id: 8,
            question: 'Care este denumirea indicatorului?',
            answers: {
                A: 'punct de colectare a materialelor reciclabile',
                B: 'presemnalizarea unei intersecţii cu sens giratoriu',
                C: 'sens giratoriu'
            },
            correctAnswers: ['B'],
            image: true,
            // category: '',
        },
        {
            id: 9,
            question: 'Care autovehicul va trece primul prin intersecție?',
            answers: {
                A: 'autocamionul',
                B: 'autobuzul',
                C: 'autoturismul'
            },
            correctAnswers: ['A'],
            image: true,
            // category: '',
        },
        {
            id: 10,
            question: 'Ce semnificație are indicatorul?',
            answers: {
                A: '\"Drum lunecos\"',
                B: '\"Drum în lucru\"',
                C: '\"Drum cu denivelări\"'
            },
            correctAnswers: ['C'],
            image: true,
            // category: '',
        },
        {
            id: 11,
            question: 'Schimbarea direcției de mers la dreapta sau la stânga nu este permisă la întâlnirea:',
            answers: {
                A: 'indicatorului 1;',
                B: 'indicatorului 2;',
                C: 'ambelor indicatoare.'
            },
            correctAnswers: ['B'],
            image: true,
            category: 'indicatoare-marcaje',
        },
        {
            id: 12,
            question: 'Panoul de sub indicator permite:',
            answers: {
                A: 'staționarea mijloacelor de transport public de persoane în intervalul menționat;',
                B: 'staționarea în timpul orelor menționate;',
                C: 'staționarea în afara intervalului orar menționat.'
            },
            correctAnswers: ['C'],
            image: true,
            category: 'indicatoare-marcaje',
        },
        {
            id: 13,
            question: 'Ce indică semnalul agentului de circulație?',
            answers: {
                A: 'reduceți viteza;',
                B: 'oprire;',
                C: 'măriți viteza.'
            },
            correctAnswers: ['B'],
            image: true,
            category: 'semnale-politisti',
        },
        {
            id: 14,
            question: 'Ce semnifică semnalul polițistului aflat într-o intersecție, cu brațul drept întins orizontal?',
            answers: {
                A: 'oprire pentru vehiculele și pietonii care vin din fața acestuia;',
                B: 'oprire pentru vehiculele și pietonii care vin din spatele acestuia;',
                C: 'oprire pentru vehiculele și pietonii care vin din fața și din spatele acestuia.'
            },
            correctAnswers: ['B'],
            image: false,
            category: 'semnale-politisti',
        },
        {
            id: 15,
            question: 'Este corect să depăşeşti motocicleta din faţa ta?',
            answers: {
                A: 'da;',
                B: 'nu, deoarece astfel vei depăşi axul drumului;',
                C: 'nu, deoarece nu respecţi semnificaţia indicatorului.'
            },
            correctAnswers: ['A'],
            image: true,
            category: 'depasire',
        },
        {
            id: 16,
            question: 'În ce ordine vor trece autovehiculele prin intersecţia prezentată?',
            answers: {
                A: 'tramvaiul 1, tramvaiul 2, autoturismul;',
                B: 'tramvaiul 2, tramvaiul 1, autoturismul;',
                C: 'tramvaiul 1, autoturismul, tramvaiul 2.'
            },
            correctAnswers: ['A'],
            image: true,
            category: 'prioritate',
        },
        {
            id: 17,
            question: 'În ce ordine vor trece prin intersecţie cele trei autovehicule?',
            answers: {
                A: 'autobuzul, autocamionul, autoturismul;',
                B: 'autocamionul, autobuzul, autoturismul;',
                C: 'autoturismul, autobuzul, autocamionul.'
            },
            correctAnswers: ['C'],
            image: true,
            category: 'prioritate',
        },
        {
            id: 18,
            question: 'Nu este permis unui autovehicul să circule atunci când:',
            answers: {
                A: 'poluează fonic, în timpul mersului sau staţionării, peste pragul admis de lege;',
                B: 'nu este dotat cu roată de rezervă;',
                C: 'plăcuţele cu numărul de înmatriculare sunt deteriorate.'
            },
            correctAnswers: ['A', 'C'],
            image: false,
            category: 'general',
        },
        {
            id: 19,
            question: 'Vă puteţi apropia de vehiculul din faţă?',
            answers: {
                A: 'da;',
                B: 'nu, pentru că astfel blocaţi intersecţia;',
                C: 'legea nu prevede obligaţii în această situaţie.'
            },
            correctAnswers: ['B'],
            image: true,
            category: 'general',
        },
        {
            id: 20,
            question: 'Inspecția tehnică periodică a autovehiculelor / tractoarelor agricole sau forestiere și a remorcilor trebuie efectuată:',
            answers: {
                A: 'anual, la orice service auto;',
                B: 'periodic, conform legii;',
                C: 'la cel mult doi ani, la o staţie de inspecţie tehnică autorizată.'
            },
            correctAnswers: ['B'],
            image: false,
            category: 'general',
        },
        {
            id: 21,
            question: 'Cum veţi proceda corect pentru a intra pe autostradă folosind banda de intrare (accelerare):',
            answers: {
                A: 'veţi mări viteza, întrucât banda pe care circulaţi este special creată în acest scop;',
                B: 'cedaţi trecerea autovehiculelor care circulă pe prima bandă a autostrăzii şi nu stânjeniţi în niciun fel circulaţia acestora;',
                C: 'nu aveţi nicio obligaţie, deoarece autostrada are suficiente benzi pentru a permite circulaţia tuturor vehiculelor.'
            },
            correctAnswers: ['A', 'B'],
            image: false,
            category: 'autostrazi',
        },
        {
            id: 22,
            question: 'Este permisă pătrunderea pe racordurile dintre cele două părţi carosabile ale unei autostrăzi?',
            answers: {
                A: 'nu;',
                B: 'da, pentru oprire în caz de urgenţă;',
                C: 'da, pentru întoarcere, în zona intersecţiilor.'
            },
            correctAnswers: ['A'],
            image: false,
            category: 'autostrazi',
        },
        {
            id: 23,
            question: 'Ce manevre sunt interzise pe autostradă?',
            answers: {
                A: 'folosirea benzii de accelerare pentru a schimba direcţia de mers;',
                B: 'circulaţia sau staţionarea pe banda de urgenţă, cu excepţia cazurilor justificate;',
                C: 'deplasarea cu o viteză inferioară limitei maxime permise.'
            },
            correctAnswers: ['B'],
            image: false,
            category: 'autostrazi',
        },
        {
            id: 24,
            question: 'În care dintre situaţiile prezentate mai jos nu este permisă oprirea voluntară a vehiculelor?',
            answers: {
                A: 'la o distanţă mai mică de 50 m de trecerea la nivel cu calea ferată;',
                B: 'pe pistele obligatorii pentru pietoni;',
                C: 'pe platforma căii ferate sau de tramvai, dacă prin aceasta este stânjenită circulaţia vehiculelor pe şine.'
            },
            correctAnswers: ['A', 'B', 'C'],
            image: false,
            category: 'oprire',
        },
        {
            id: 25,
            question: 'În care dintre situaţii este interzisă oprirea?',
            answers: {
                A: 'la o distanţă mai mică de 25 m înainte şi după indicatorul de staţie pentru mijloacele de transport public de persoane;',
                B: 'la o distanţă mai mică de 25 m de colţul intersecţiei;',
                C: 'la o distanţă de 5 m în spatele ultimului vagon de tramvai oprit într-o staţie fără refugiu pentru pietoni.'
            },
            correctAnswers: ['A', 'B'],
            image: false,
            category: 'oprire',
        },
        {
            id: 26,
            question: 'În care dintre situaţiile de mai jos este interzisă întoarcerea?',
            answers: {
                A: 'în curbele cu vizibilitatea redusă sub 50 m;',
                B: 'la întâlnirea indicatorului „Drum cu prioritate“;',
                C: 'la întâlnirea indicatorului „Drum îngustat“.'
            },
            correctAnswers: ['A', 'C'],
            image: false,
            category: 'manevre',
        },
    ];

    useEffect(() => {
        testData.sort(() => Math.random() - 0.5);
        setData(testData);
    }, []);


    // useEffect(() => {
    //     if (currentQuestion > 2) {
    //         alert('over');
    //     }
    // }, [currentQuestion]);

    const nextQuestion = () => {
        if (currentQuestion === data.length - 1) {
            showOver();
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const displayQuiz = () => {
        if (currentQuestion < data.length && timeLeft === true) {
            return showQuestion();
        } else {
            return showOver();
        }
    }

    const skipQuestion = () => {
        setData(currentQuestions => [...currentQuestions, data[currentQuestion]]);
        nextQuestion();
    }

    const showQuestion = () => {
        return (
            <QuestionBox
                data={data[currentQuestion]}
                submitHandler={(correct) => {
                    nextQuestion();
                    if (correct) {
                        setCorrectAnswers(correctAnswers + 1);
                    } else {
                        setWrongAnswers(wrongAnswers + 1);
                    }
                }}
                skipHandler={skipQuestion}/>
        )
    }

    const showOver = () => {
        const winner = correctAnswers >= 22;
        if (winner) {
            return showWinner();
        } else {
            return showLoser();
        }
    }

    const showWinner = () => {
        return (
            <div className='winner'>
                You won!
            </div>
        )
    }

    const showLoser = () => {
        return (
            <div className='loser'>
                You lost!
            </div>
        )
    }
    return (
        <div className='quiz-page'>
                <Timer timeOutHandler={() => setTimeLeft(false)}/>
            {displayQuiz()}
            <div className='statistics-container'>
                <div className='questions-left'>
                    Întrebări rămase:
                    <div className='number-container'>
                        <p>{data.length - currentQuestion}</p>
                    </div>
                </div>
                <div className='correct-answers'>
                    Răspunsuri corecte:
                    <div className='number-container'>
                        <p>{correctAnswers}</p>
                    </div>
                </div>
                <div className='wrong-answers'>
                    Răspunsuri greșite:
                    <div className='number-container'>
                        <p>{wrongAnswers}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}