const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já jogou Vôlleyball?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "O vôlei é um esporte que tem se tornado batante popular no Brasil, e está sendo amado por diversas pessoas. "
            },
            {
                texto: "Não",
                afirmacao: "Apesar de estar ganhando muita fama, não é todos que curtem o esporte."
            }
        ]
    },
    {
        enunciado: "Quantas posições existem dentro do esporte?",
        alternativas: [
            {
                texto: "6 posições.",
                afirmacao: "O esporte possui 5 variações de posições."
            },
            {
                texto: "5 posições.",
                afirmacao: "Os atletas exercem aquela em que mais se encaixam e se destacam."
            }
        ]
    },
    {
        enunciado: "Quais são suas posições preferidas no vôlei? Em quais você normalmente joga?",
        alternativas: [
            {
                texto: "Central, líbero ou levantador.",
                afirmacao: "Dentre as posições temos o central, libero e o levantador, que atuam na área da defesa, bloqueio e do levantamento."
            },
            {
                texto: "Ponta ou oposto.",
                afirmacao: "Também temos a ponta e o opsto que normalmente participam dos ataques, o ponto de definição."
            }
        ]
    },
    {
        enunciado: "O que você faz quando fica tenso em uma partida?",
        alternativas: [
            {
                texto: "Tento me concentrar, respiro fundo e tento não me abalar.",
                afirmacao: "Para praticar esportes, é necessário foco e cuidado para que os problemas não afetem o seu andamento em quadra."
            },
            {
                texto: "Peço para sair, tomo água, respiro e visualizo a partida de fora da quadra.",
                afirmacao: "As vezes é preciso tirar um tempo para aliviar um pouco a tensão."
            }
        ]
    },
    {
        enunciado: "Você gostaria de seguir uma carreira profissional no esporte? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Hoje em dia, o võlei é um esporte muito desejado e muitas pessoas sonham em seguir uma carreira profissional, já outros jogam por hobbie, como uma prática esportiva."
            },
            {
                texto: "Não.",
                afirmacao: "Consegir um profissional no Brasil não é fácil, porém não é impossivel, basta querer e lutar pelo seu sonho. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();