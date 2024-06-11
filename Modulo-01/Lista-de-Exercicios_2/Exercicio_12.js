/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

let a = 0;
let b = 1;

console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:");

for (let i = 0; i < 10; i++) {
  console.log(b);
  let temp = a;
  a = b;
  b = b + temp;
}
