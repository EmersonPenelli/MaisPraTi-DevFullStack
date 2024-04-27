/*
Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

const prompt = require('prompt-sync')();

let entradaUsuario;
let temperaturaCelsius;


do {
    entradaUsuario = prompt("Informe um número inteiro válido para a temperatura em Celsius: ");
    temperaturaCelsius = parseInt(entradaUsuario);
} while (isNaN(temperaturaCelsius) || !Number.isInteger(temperaturaCelsius));


if (temperaturaCelsius < -273) {
    console.log("A temperatura não pode ser convertida, pois -273,15°C é igual ao zero absoluto, 0 Kelvin. Não existe temperatura mais baixa.");
} else {
    let temperaturaFahrenheit = temperaturaCelsius * (9 / 5) + 32;
    console.log("A temperatura convertida para fahrenheit é ", temperaturaFahrenheit + " °F");
}
