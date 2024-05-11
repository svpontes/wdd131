// Definição das variáveis de temperatura, velocidade do vento e condições climáticas
let temp = 26; // Celsius
let wind = 5; // km/h
let cond = "Sunny";

// Função para calcular o fator de resfriamento do vento
const calculateWindChill = (t, v) => {
    // Coeficientes para o cálculo do fator de resfriamento do vento em Celsius
    const coeficientes = {
        a: 13.12,
        b: 0.6215,
        c: 11.37,
        d: 0.3965,
    };

    // Coeficientes para o cálculo do fator de resfriamento do vento em Fahrenheit
    const coeficientesFahrenheit = {
        a: 35.74,
        b: 0.6215,
        c: 35.75,
        d: 0.4275,
    };

    // Utiliza os coeficientes de acordo com o tipo de temperatura (Celsius ou Fahrenheit)
    const coef = t => t === "c" ? coeficientes : coeficientesFahrenheit;
    const { a, b, c, d } = coef("c");

    // Calcula o fator de resfriamento do vento
    const result = Math.round((a + b * t) - (c * v ** 0.16) + (d * t * v ** 0.16));
    return result;
};

// Seleciona os elementos do HTML onde os valores serão exibidos
const temperature = document.querySelector('#temp');
const windKm = document.querySelector("#wind");
const conditions = document.querySelector("#cond");
const windChillRes = document.querySelector("#windChill");

// Exibe os valores iniciais nos elementos HTML
temperature.textContent = `${temp}°C`;
windKm.textContent = `${wind} km/h`;
conditions.textContent = cond;

// Calcula o fator de resfriamento do vento e exibe o resultado no HTML
const windChill = calculateWindChill(temp, wind);
windChillRes.textContent = `${windChill} km/h`;
