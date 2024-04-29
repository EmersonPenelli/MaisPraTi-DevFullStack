// Lista de Exercícios em Javascript

/*
1.Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
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


---------------------------------------------------------------------------------------------------------------------------------------

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



----------------------------------------------------------------------------------------------------------------------------------------

/*
3.Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
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



----------------------------------------------------------------------------------------------------------------------------------------

/*
4.Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/

const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const mediaSemestral = (nota1 + nota2) / 2;

if (mediaSemestral >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Infelizmente, você não foi aprovado.");
}

console.log("Sua média semestral é: " + mediaSemestral.toFixed(1));



----------------------------------------------------------------------------------------------------------------------------------------

/*
5.Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const mediaSemestral = (nota1 + nota2) / 2;

if (mediaSemestral >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Você foi REPROVADO! Estude mais.");
}

console.log("Sua média semestral é: " + mediaSemestral.toFixed(1));


----------------------------------------------------------------------------------------------------------------------------------------

/*
6.Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt("Digite o valor do lado A: "));
const ladoB = parseFloat(prompt("Digite o valor do lado B: "));
const ladoC = parseFloat(prompt("Digite o valor do lado C: "));

const formaTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

if (formaTriangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}

----------------------------------------------------------------------------------------------------------------------------------------

/*
7.As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
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


----------------------------------------------------------------------------------------------------------------------------------------

/* 
8.Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
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


----------------------------------------------------------------------------------------------------------------------------------------

/*
9.Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
    
*/

const prompt = require('prompt-sync')();


let codigo = parseInt(prompt("Informe um número inteiro válido para o código:\n1- Sul\n2- Norte\n3- Leste\n4- Oeste\n5 ou 6- Nordeste\n7,8 ou 9- Sudeste\n10 até 20- Centro-Oeste\n25 até 50- Nordeste\nFora do intervalo serão considerados produtos importados;\n"))
let regiao = "Produto importado";

// Verificando as condições
switch (codigo) {
    case 1: {
        regiao = "Sul";
        break;
    }

    case 2: {
        regiao = "Norte";
        break;
    }

    case 3: {
        regiao = "Leste";
        break;
    }

    case 4: {
        regiao = "Oeste";
        break;
    }

    case 7: case 8: case 9: {
        regiao = "Sudeste";
        break;
    }
    default:
        if ((codigo >= 5 && codigo <= 6) || (codigo >= 25 && codigo <= 50)) {
            regiao = "Nordeste"
        }
        else if ((codigo >= 10 && codigo <= 20)) {
            regiao = "Centro-Oeste"
        }
        break;
}

// Fazendo os tratamentos para impressão

if (regiao == "Produto importado") {
    console.log("O produto é importado!")
}
else {
    console.log(`A região do produto é ${regiao}`);
}


----------------------------------------------------------------------------------------------------------------------------------------


/*
10.Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/


const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número: '));

for (let i = 0; i < 10; i++) {
    console.log(numero + ':' + i);
}


----------------------------------------------------------------------------------------------------------------------------------------

/*
11.Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
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


----------------------------------------------------------------------------------------------------------------------------------------

/*
12.Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5
*/

for(let numero = 1000; numero <= 1999; numero++) {
    if( numero % 11 === 5){
        console.log('O número é: ' + numero);
    }
}


----------------------------------------------------------------------------------------------------------------------------------------

/* 
13.Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

const prompt = require('prompt-sync')();

// for(i = 0;i < 5; i++){
//     numero = prompt('Digite um número: ');
//     for(j = 1; j <= numero; j++){
//         console.log(`${j} x ${numero} = ${j * numero}`)
//     }
// }


//  Utilizando array para armazenar os números e efetuar a tabuada

let numero = [];

for (let i = 0; i < 5; i++){
    numero[i] = prompt('Digite um número: ');
}
for(let i = 0; i <= numero.length; i++) {
    for(let j = 1; j <= numero[i]; j++) {
        console.log(`${j} x ${numero[i]} = ${j * numero[i]}`)
    }
    console.log('\n')
}

----------------------------------------------------------------------------------------------------------------------------------------

/*
14.Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
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


----------------------------------------------------------------------------------------------------------------------------------------

/*
15.Fazer um algoritmos para receber um número decimal e o peso de cada número até
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


----------------------------------------------------------------------------------------------------------------------------------------

/*
16.Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

const prompt = require('prompt-sync')();

let contador = 0;
let numero = 100;

while(contador < 50){
    let primo = true;
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            primo = false;
            break;
        }
    }
    if(primo){
        console.log(numero);
        contador++;
    }
    numero++;
}


