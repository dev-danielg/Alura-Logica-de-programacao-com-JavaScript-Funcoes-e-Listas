function mudarValorTag(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mudarValorTag('h1', 'Hora do Desafio');

function chamarConsole() {
    console.log(`O botão foi clicado`);
    return;
}

function chamarAlert() {
    alert(`Eu amo JS`);
}

function chamarPrompt() {
    let cidade = undefined;
    while (true) {
        cidade = prompt('Digite o nome de uma cidade do Brasil');
        cidade = cidade !== null ? cidade : undefined;
        if (cidade === undefined || cidade === '') {
            alert(`Por favor, digite o nome de uma cidade.`);
        }
        else {
            alert(`Estive em ${cidade} e lembrei de você`);
            break;
        }
    }
    return;
}

function chamarSoma() {
    function verificarInteiro(valor) {
        return Math.trunc(valor) === valor;
    }

    function promptNumeroInteiro(msgPrompt) {
        while (true) {
            let numeroInput = prompt(msgPrompt)
            numeroInput = numeroInput !== null && numeroInput !== NaN && numeroInput !== '' ? numeroInput : undefined;
            let numero = Number(numeroInput);
            let verificacaoInteiro = verificarInteiro(numero);
            console.log(`Verificar inteiro: ${verificacaoInteiro}`);
            if (numero === undefined || !verificacaoInteiro) {
                alert(`Por favor, digite um número inteiro válido`);
            }
            else {
                return numero;
            }
        }
    }

    const numero1 = promptNumeroInteiro('Digite o primeiro número inteiro');
    const numero2 = promptNumeroInteiro('Agora digite o segundo número inteiro');
    const soma = numero1 + numero2;
    alert(`A soma entre ${numero1} e ${numero2} é ${soma}`);
}
