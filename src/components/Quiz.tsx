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
    },
    {
        pergunta: "Três ilhas A, B e C aparecem num mapa em escala 1:10000. Juntas foram um triangulo onde a distância entre A e C é 12 cm, B e A formam um angulo de 30° e 105° repectivamente. Das alternativas, a que melhor se aproxima de distância entre as ilhas A e B é:",
        alternativas: [
            "2,3 km",
            "2,1 km",
            "1,9 km",
            "1,4 km",
            "1,7 km",
        ],
        correta: "1,7 km",
    },
    {
        pergunta: "No triângulo ABC, o lado BC tem 10 centímetros enquanto os angulos A e B tem 60° e 45° respectivamente. Determine a medida do lado AC. (Use √2 = 1,4 e √3 = 1,7).",
        alternativas: [
            "8,2 cm",
            "12,2 cm",
            "14 cm",
            "17 cm",
            "17,2 cm",
        ],
        correta: "8,2 cm",
    },
    {
        pergunta: "Qual é a medida do segmento AC, dado as medidas:BC = 2√2, anglo A = 135° e anglo C = 15°.",
        alternativas: [
            "2 cm",
            "2√3 cm",
            "3√2 cm",
            "3 cm",
            "4√2 cm",
        ],
        correta: "2 cm",
    },
    {
        pergunta: "Para resolver uma discussão entre dois alunos sobre a definição da função cossecante, um deles foi à Biblioteca Central. Como resultado da pesquisa, ele encontrou a definição de cossec x, que é",
        alternativas: [
            "1/cos x, se cos x ≠ 1",
            "1/sen x, se sen x ≠ 1",
            "1/cos x, se cos x ≠ 0",
            "1/sec x, se sec x ≠ 0",
            "1/sen x, se sen x ≠ 0",
        ],
        correta: "2√21 m",
    },
    {
        pergunta: "Um terreno de forma triangular tem frente de 10 m e 20 m, em ruas que formam, entre si, um ângulo de 120º. A medida do terceiro lado do terreno, em metros, é:",
        alternativas: [
            "10√5",
            "10√6",
            "10√7",
            "26",
            "20√2",
        ],
        correta: "10√7",
    },
    {
        pergunta: "Deseja-se medir a distância entre duas cidades B e C sobre um mapa, sem escala.Sabe-se que AB = 60km e AC = 110km, onde A é uma cidade conhecida e tem um angulo de 60°. Assim, a distância aproximada entre B e C, em km, é:",
        alternativas: [
            "90 km",
            "100,2 km",
            "95,4 km",
            "48,9 km",
            "99,3 km",
        ],
        correta: "95,4 km",
    },
    {
        pergunta: "Uma empresa, que transporta a produção de soja de uma fazenda, faz o trajeto de A até B (onde fica localizado o silo) passando por C, conforme a figura. Qual será, aproximadamente, a economia por viagem, em km, se o fazendeiro construir uma estrada ligando AB diretamente?",
        alternativas: [
            "3",
            "6",
            "10",
            "13",
            "17",
        ],
        correta: "3",
    },
    {
        pergunta: "O menor lado de um paralelogramo, cujas diagonais medem 8√2 m e 10 m e formam entre si um ângulo de 45º, mede:",
        alternativas: [
            "√13 m",
            "√17 m",
            "13√2 / 4 m",
            "17√2 / 5 m",
            "17√3 / 4 m",
        ],
        correta: "√17 m",
    },
    {
        pergunta: "Dois lados de um terreno de forma triangular medem 15 m e 10 m, formando um ângulo de 60°. O comprimento do muro necessário para cercar o terreno, em metros, é:",
        alternativas: [
            "5(5 + √15)",
            "5(5 + √5)",
            "5(5 + √13)",
            "5(5 + √11)",
            "5(5 + √7)",
        ],
        correta: "5(5 + √7)",
    },
    {
        pergunta: "Calcule o seno do maior ângulo de um triângulo cujos lados medem 4,6 e 8 metros.",
        alternativas: [
            "√15/4",
            "1/4",
            "1/2",
            "√10/4",
            "√3/2",
        ],
        correta: "√15/4",
    },
    {
        pergunta: "Pelo triângulo ABC, no qual possui AC = 6√5,  AB = 6, BC = x e o angulo B tem 120°.Qual o valor de x2 + 6x?",
        alternativas: [
            "76",
            "88",
            "94",
            "102",
            "144",
        ],
        correta: "144",
    },
    {
        pergunta: "A falta de oportunidade em algumas regiões de conflito faze com que uma parte da população recorra a embarcações clandestinas para buscar uma vida melhor nos países vizinhos. Uma barca fazia o caminho BC = 100km e depois virava 120° e continuava mais 200km até A. Quantos km tem uma linha reta de B até A?",
        alternativas: [
            "100",
            "100√3",
            "100√5",
            "100√7",
            "300",
        ],
        correta: "100√7",
    },
    {
        pergunta: "Uma pessoa se encontra no ponto A de uma planície, às margens de um rio e vê, do outro lado do rio, o topo do mastro de uma bandeira, ponto B. Com o objetivo de determinar a altura h do mastro, ela anda, em linha reta, 50 m para a direita do ponto em que se encontrava e marca o ponto C. Sendo D o pé do mastro, avalia que os ângulos BÂC e BĈD valem 30º, e o ângulo AĈB vale 105º, qual a altura do mastro?.",
        alternativas: [
            "12,5",
            "12,5√2",
            "25,0",
            "25,0√2",
            "35,0",
        ],
        correta: "12,5√2",
    },
    {
        pergunta: "Observadores nos pontos A e B localizam um foco de incêndio florestal em F. Conhecendo os ângulos A = 45º e B = 105º e a distância AB = 15 km, determinar a distância BF",
        alternativas: [
            "10√2",
            "15√2",
            "20√2",
            "25√2",
            "30√2",
        ],
        correta: "15√2",
    },

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