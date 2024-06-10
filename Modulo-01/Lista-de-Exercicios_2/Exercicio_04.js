/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const prompt = require("prompt-sync")();

function receberEntradaDecimal(mensagem) {
  let numero;
  do {
    numero = parseFloat(prompt(mensagem));
    if (isNaN(numero) || numero <= 0) {
      console.log("Informe um número decimal, positivo válido!");
    }
  } while (isNaN(numero) || numero <= 0);
  return numero;
}

function podeFormarTriangulo(lado1, lado2, lado3) {
  return (
    lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2
  );
}

let segmento1 = receberEntradaDecimal(
  "Informe o tamanho do primeiro segmento de reta: "
);
let segmento2 = receberEntradaDecimal(
  "Informe o tamanho do segundo segmento de reta: "
);
let segmento3 = receberEntradaDecimal(
  "Informe o tamanho do terceiro segmento de reta: "
);

if (podeFormarTriangulo(segmento1, segmento2, segmento3)) {
  console.log("É possível formar um triângulo!");
} else {
  console.log("É impossível formar um triângulo!");
}
