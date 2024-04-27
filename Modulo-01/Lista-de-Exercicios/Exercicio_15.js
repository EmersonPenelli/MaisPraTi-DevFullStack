/*
Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const prompt = require('prompt-sync')();

let soma = 0;
let peso = 0;
let pesoTotal = 0;
let numero = 0;

while (true){
    numero = parseFloat(prompt('Digite um número: '));
    if(numero === 0){
        break;
    }
    peso = parseFloat(prompt('Digite o peso do número: '));
    soma += numero * peso;
    pesoTotal += peso;
}

let media = soma / pesoTotal;
console.log(`A média ponderada dos números digitados é: ${media}`);


