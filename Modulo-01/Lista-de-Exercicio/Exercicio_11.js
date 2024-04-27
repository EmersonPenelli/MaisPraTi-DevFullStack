/*
Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO
*/

const prompt = require('prompt-sync')();

let numero = 0;
numero = prompt('Digite um número: ');

while(numero >= 0){
    if( numero % 2 === 0){
        console.log('O número é PAR');
    }else {
        console.log('O número é ÍMPAR');
    }
    numero = prompt('Digite outro número: ');
}

console.log('Fim do programa')


