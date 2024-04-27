/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true){
    let numero = parseFloat(prompt('Digite um número: '));
    if(numero === 0){
        break;
    }
    soma += numero;
    contador++;
}

let media = soma / contador;
console.log('A média dos números é: ', media);


// Outra forma de resolver o exercício


// let soma = 0;
// let contador = 0;
// let numero = parseFloat(prompt('Digite um número: '));

// while (numero !== 0){
//     soma += numero;
//     contador++;
//     numero = parseFloat(prompt('Digite um número: '));
// }

// let media = soma / contador;
// console.log('A média dos números é: ', media);








