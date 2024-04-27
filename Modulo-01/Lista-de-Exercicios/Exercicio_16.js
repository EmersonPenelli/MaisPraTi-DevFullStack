/*
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
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

 