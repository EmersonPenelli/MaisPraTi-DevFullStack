/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();
const numMaca = parseInt(prompt("Digite o número de maçãs compradas: "));

let precoUnitario, precoTotal;

if (numMaca < 12) {
    precoUnitario = 0.30; 
} else {
    precoUnitario = 0.25; 
}

precoTotal = numMaca * precoUnitario;

console.log("O valor total da compra é: R$ " + precoTotal.toFixed(2));
