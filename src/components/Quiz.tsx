import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useReducer, useState } from "react";
import * as yup from "yup";
import { styled } from "../Theme";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import axios from "axios";

type Points = {
    points: number,
}

const questions = [
    {
        pergunta: "Em uma fazenda, uma estrada reta liga duas porteiras A e B, outra estrada liga B a uma porteira C, sendo CB = 5 km, BA = 10√3 km e ABC = 150°. Calcule a distância entre os pontos A e C, em km.",
        alternativas: [
            "5√19",
            "5√7",
            "6",
            "9√3",
            "25"
        ],
        correta: "5√19",
    },
    {
        pergunta: "João está procurando cercar um terreno triangular que ele comprou no campo. Ele sabe que dois lados desse terreno medem, respectivamente, 10m e 6m e formam entre si um ângulo de 120° O terreno será cercado com três voltas de arame farpado. Se o preço do metro do arame custa R$5,00, qual será o valor gasto por João com a compra do arame?",
        alternativas: [
            "350 reais",
            "425 reais",
            "450 reais",
            "515 reais",
            "375 reais",
        ],
        correta: "450 reais",
    },
    {
        pergunta: "Um determinado engenheiro precisa fazer a medições de um terreno na forma triangular. Um dos lados mede 40 metros, outro mede 50 metros e o ângulo formado por este dois lados é de 60°. Qual é o valor do terceiro lado?",
        alternativas: [
            "8√7m",
            "12m",
            "10√21m",
            "15m",
            "13m",
        ],
        correta: "10√21m",
    },
    {
        pergunta: " Dois lados de um triângulo medem 8 m e 10 m e formam um ângulo de 60°. O terceiro lado desse triângulo mede:",
        alternativas: [
            "2√21 m",
            "2√31 m",
            "2√41 m",
            "2√51 m",
            "2√61 m",
        ],
        correta: "2√21 m",
    },
    {
        pergunta: "Um avião levanta voo fazendo com a horizontal um ângulo de 20º . A que altura se encontra o avião, depois de ter percorrido 7 km?",
        alternativas: [
            "2394m",
            "2548m",
            "6578m",
            "4524m",
            "2,394m",
        ],
        correta: "2,394m",
    },
    {
        pergunta: "Qual é a medida do lado oposto ao ângulo de 30°, em um triângulo, sabendo que os outros dois lados medem 2 e √3?",
        alternativas: [
            "1",
            "1.5",
            "2",
            "2.5",
            "3",
        ],
        correta: "1",
    }

];

const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

const FormWrapper = styled('div', {
    padding: 100,
})

const TitleQuestion = styled('div', {
    fontSize: '3vw',
    marginBottom: '5%',
    fontWeight: 'bold',
    color: '$green100',
})

const StatementQuestion = styled('div', {
    fontSize: '1.5vw',
    marginBottom: '5%',
    color: '$green100',
    textAlign: 'left',
})

const OptionsQuestions = styled('div', {
    marginBottom: '5%',
    color: '$green100',
    fontSize: '1.5vw',
})

const OptionLabel = styled('label', {
    marginLeft: '7%',
    marginRight: '7%',
})

const OptionStyle = {
    marginRight: '1%',
    width: '1.8vw',
    height: '1.8vw',
}

const Span = {
    position: 'absolute',
}

const StyleButton = {
    border: 0,
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'white',
    width: '30%',
    height: '3vw',
    background: '#06D6A0',
    borderRadius: '48px',
    cursor: 'pointer',
    marginBottom: '1%',
}

const Warning = styled('span', {
    color: 'red',
    fontSize: '1vw',
})

const StyledMessage = styled('div', {
    display: 'block',
    marginTop: '2%',
    fontSize: '1vw',
})

const MessageSuccess = {
    color: 'green',
}

const MessageFailure = {
    color: 'red',
}

function getCurrentUserPoints(currentUser:any){
    return UserService.getUserPoints(currentUser.id);
}

function updatePoints(id:any, points:any){
    return UserService.addPoints({
        id: id,
        points: points,
    });
}

export function Quiz() {
    console.log(selectedQuestions);
    var   [currentQIndex, setCurrentQIndex] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState(selectedQuestions[currentQIndex]);
    const [correct, setCorrect] = useState(false);
    const [message, setMessage] = useState('');
    var   [points, setPoints] = useState(0);
    const [disableInputs, setDisableInputs] = useState(false);
    const [currentUser, setUser] = useState(AuthService.getCurrentUser());
    
    const handleClickAnswer = async (values: any) => {
        setDisableInputs(true);
        if (values.picked == currentQuestion.correta) {
            setMessage('Resposta Correta!');
            setCorrect(true);
            setPoints(++points);
        } else {
            setMessage('Resposta Errada!');
            setCorrect(false);
        }
            
        setTimeout(async() => {
            setDisableInputs(false);
            setMessage('');
            setCorrect(false);
            setCurrentQIndex(++currentQIndex);
            setCurrentQuestion(selectedQuestions[currentQIndex]);
            if(currentQIndex >= selectedQuestions.length){
                const currentPoints = await getCurrentUserPoints(currentUser)
                const updatedPoints = points + currentPoints.points;
                updatePoints(currentUser.id, updatedPoints);
            };
        }, 3000);
    };

    const validationCadastro = yup.object().shape({
        picked: yup.string().required("Selecione uma alternativa")
    });

    function FormQuestion() {
        if (currentQIndex < selectedQuestions.length)
            return (
                <FormWrapper>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleClickAnswer}
                        validationSchema={validationCadastro}>
                        <Form>
                            <TitleQuestion>
                                {`Questão ${currentQIndex + 1}`}
                            </TitleQuestion>
                            <StatementQuestion>
                                {currentQuestion.pergunta}
                            </StatementQuestion>
                            <OptionsQuestions id="group">
                                {currentQuestion.alternativas?.map((alternativa) =>
                                    <OptionLabel>
                                        <Field type="radio" name="picked" text={alternativa} value={alternativa} key={alternativa}
                                            style={OptionStyle} disabled={disableInputs}/>
                                        <span style={Span}>{alternativa}</span>
                                    </OptionLabel>
                                )}
                            </OptionsQuestions>
                            <button type="submit" style={StyleButton} disabled={disableInputs}>Confirmar Resposta</button>
                            <Warning as={ErrorMessage}
                                component="span"
                                name="picked"
                            />
                            <StyledMessage>
                                {
                                    message &&
                                    <span style={correct ? MessageSuccess : MessageFailure}>{message}</span>
                                }
                            </StyledMessage>
                        </Form>
                    </Formik>
                </FormWrapper>
            )
        else
            return (
                <div>Você ganhou {points} {points == 1 ? 'ponto' : 'pontos'}!</div>
            )
    }

    const initialValues =
    {
        picked: '',
    };





    return (
        <FormQuestion />
    )
}