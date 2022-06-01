let pontos = 0
let placar = 0

//PERGUNTA
let numQuestao = document.querySelector("#numQuestao")
let pergunta   = document.querySelector("#pergunta")
let aviso      = document.querySelector("#aviso")

//ALTERNATIVAS
let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let d = document.querySelector("#d")
let e = document.querySelector("#e")

let alternativas = document.querySelector("#alternativas")

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    alternativaE : "Alternativa E",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Em uma fazenda, uma estrada reta liga duas porteiras A e B, outra estrada liga B a uma porteira C, sendo CB = 5 km, BA = 10√3 km e ABC = 150°. Calcule a distância entre os pontos A e C, em km.",
    alternativaA : "5√19",
    alternativaB : "5√7",
    alternativaC : "6",
    alternativaD : "9√3",
    alternativaE : "25",
    correta      : "5√19",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "João está procurando cercar um terreno triangular que ele comprou no campo. Ele sabe que dois lados desse terreno medem, respectivamente, 10m e 6m e formam entre si um ângulo de 120° O terreno será cercado com três voltas de arame farpado. Se o preço do metro do arame custa R$5,00, qual será o valor gasto por João com a compra do arame?",
    alternativaA : "350 reais",
    alternativaB : "425 reais",
    alternativaC : "450 reais",
    alternativaD : "515 reais",
    alternativaE : "375 reais",
    correta      : "450 reais",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Um determinado engenheiro precisa fazer a medições de um terreno na forma triangular. Um dos lados mede 40 metros, outro mede 50 metros e o ângulo formado por este dois lados é de 60°. Qual é o valor do terceiro lado?",
    alternativaA : "8√7m",
    alternativaB : "12m",
    alternativaC : "10√21m",
    alternativaD : "15m",
    alternativaE : "13m",
    correta      : "10√21m",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Reconheça a lei dos cossenos",
    alternativaA : "a² = b² - c² - 2abcosA",
    alternativaB : "a² = b² + c² - 2accosB",
    alternativaC : "a² = b² - c² - 2abcosA",
    alternativaD : "a² = b² - c² - 2bccosA",
    alternativaE : "a² = b² + c² - 2bccosA",
    correta      : "a² = b² + c² - 2bccosA",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Um avião levanta voo fazendo com a horizontal um ângulo de 20º . A que altura se encontra o avião, depois de ter percorrido 7 km?",
    alternativaA : "2,394m",
    alternativaB : "2394m",
    alternativaC : "2548m",
    alternativaD : "6578m",
    alternativaE : "4524m",
    correta      : "2394m",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let totalDeQuestoes = (questoes.length)-1

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    e.textContent = questoes[nQuestao].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {
    
    // bloquear a escolha de opcoes
    bloquearAlternativas()

    let tempo_delay;

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent

    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        tempo_delay = 1000;
        aviso.textContent = "Reposta certa!"
        pontos += 1 // pontos = pontos + 10
    } else {
        tempo_delay = 5000;
        aviso.textContent = `
            Reposta Errada!
            A resposta certa é ${certa}.
        `
    }

    // atualizar placar
    placar = pontos

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1
        desbloquearAlternativas()

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            aviso.textContent = ""
            proximaQuestao(proxima)
        }
    }, tempo_delay)
}

function fimDoJogo() {

    let pont = ''
    pontos < 2 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont
    numQuestao.classList.add('bloqueado')

    aviso.textContent = "Fim do Quiz!"
    bloquearAlternativas();

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    setTimeout(function() {
        window.location.href = "index.html";
    }, 5000)
}
