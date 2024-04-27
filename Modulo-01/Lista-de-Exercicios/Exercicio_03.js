/*
Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();

const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
const num2 = parseInt(prompt("Digite o segundo número inteiro: "));
const num3 = parseInt(prompt("Digite o terceiro número inteiro: "));

const resultado1 = num1 + 25;
const resultado2 = num2 * 3;
const resultado3 = num3 + (num3 * 0.12);
const resultado4 = num1 + num2 + num3;

console.log("1º inteiro + 25 = " + resultado1);
console.log("2º inteiro triplicado = " + resultado2);
console.log("3º inteiro modificado para 12% = " + resultado3);
console.log("Soma dos valores originais dos três primeiros inteiros = " + resultado4);
