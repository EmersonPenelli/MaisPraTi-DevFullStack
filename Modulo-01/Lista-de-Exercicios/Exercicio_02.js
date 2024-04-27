/* 
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/

const prompt = require('prompt-sync')();

const numEleitores = parseInt(prompt("Informe o número total de eleitores: "));
const numVotosBrancos = parseInt(prompt("Informe o número de votos brancos: "));
const numVotosNulos = parseInt(prompt("Informe o número de votos nulos: "));
const numVotosValidos = parseInt(prompt("Informe o número de votos válidos: "));

const percentualBrancos = (numVotosBrancos / numEleitores) * 100;
const percentualNulos = (numVotosNulos / numEleitores) * 100;
const percentualValidos = (numVotosValidos / numEleitores) * 100;

console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
