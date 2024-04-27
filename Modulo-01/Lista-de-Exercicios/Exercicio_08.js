/* 
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2;

do {
    valor2 = parseFloat(prompt("Digite o segundo valor: "));
    if (valor1 < valor2) {
        console.log(`Em ordem crescente: ${valor1}, ${valor2}`); 
        break;
    } else if (valor1 > valor2){
        console.log(`Em ordem crescente: ${valor2}, ${valor1}`);
        break;
    } else if (valor1 === valor2){
        console.log("Os valores são iguais, digite novamente!");
    }
} while(valor1 === valor2);




















