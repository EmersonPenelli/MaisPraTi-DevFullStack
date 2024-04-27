/*
Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5
*/




for(let numero = 1000; numero <= 1999; numero++) {
    if( numero % 11 === 5){
        console.log('O número é: ' + numero);
    }
}
