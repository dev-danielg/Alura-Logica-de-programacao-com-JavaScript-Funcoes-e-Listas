function calcularFatorial(numero) {
    let soma = 1;
    for (let i = numero; i > 1; i--) {
        soma = soma * i;
    }
    return parseInt(soma);
}

