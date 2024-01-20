// CHECK
console.log('JS OK');

// ! SCALETTA NACK 1 
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER CALCOLARE LE ZUCCHINE
3- STAMPO
*/

// METODO FOREACH
const arrayWeight = arrayZuchinis.reduce((acc, element) => {
    return acc + element.weight
}, 0)

//STAMPO
console.log('PESO TOTALE: ' + arrayWeight);