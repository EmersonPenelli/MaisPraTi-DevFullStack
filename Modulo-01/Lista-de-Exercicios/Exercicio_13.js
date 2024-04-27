/* 
Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
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

