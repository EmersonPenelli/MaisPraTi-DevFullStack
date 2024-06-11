/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

const prompt = require('prompt-sync')();

let lista = [];

for (let index = 0; index < 10; index++) {
    lista.push(parseInt(prompt(`Digite o número de índice igual a ${index}: `)));
}

console.log("Números pares e suas posições:");
for (let index = 0; index < lista.length; index++) {
    if (lista[index] % 2 === 0) {
        console.log(`Valor: ${lista[index]}, Índice: ${index}`);
    }
}
