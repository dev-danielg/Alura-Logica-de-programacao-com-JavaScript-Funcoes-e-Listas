function calcularCirculo(raio, unidadeDeMedida) {
    area = `${3.14 * raio ** 2} ${unidadeDeMedida}²`;
    perimetro = `${2 * 3.14 * raio} ${unidadeDeMedida}`;
    console.log(`Área: ${area}\nPerímetro: ${perimetro}`);
}