function calcularIMC(altura, peso) {
    let imc = peso / (altura ** 2);
    return parseFloat(imc.toFixed(1));
}

let imc = calcularIMC(1.78, 60.2);
console.log(imc);
