function calcularRetangulo(altura, largura, unidadeDeMedida) {
    area = `${altura * largura} ${unidadeDeMedida}²`;
    perimetro = `${(altura * 2) + (largura * 2)} ${unidadeDeMedida}`;
    console.log(`Área: ${area}\nPerímetro: ${perimetro}`);
}