// CHECK
console.log('JS OK');

// ! SCALETTA NACK 1 
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER CALCOLARE LE ZUCCHINE
3- STAMPO
*/
/*

// METODO FOREACH
const arrayWeight = arrayZuchinis.reduce((acc, element) => {
    return acc + element.weight
}, 0)

//STAMPO
console.log('PESO TOTALE: ' + arrayWeight);

*/

// ! SCALETTA NACK 2
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER SEPARARE LE DIMISIONI DELLE ZUCCHINE
3- CALCOLO CON IL REDUCE IL PESO DEI DUE GRUPPI
4- STAMPO
*/

/*
// CREO NUOVO ARRAY DI OGETTI PER SEPARARE LE DUE LUNGHEZZE
const arrayLenght = arrayZuchinis.reduce((acc, element) => {
    if(element.length <= 15) {
        acc['inferior'].push(element);
    } else{
        acc['superior'].push(element);
    }
    
    return acc;
}, {inferior: [], superior: []})


// STAMPO
console.log(arrayZuchinis);
console.log(arrayLenght);


// PRENDO ARRAYLENGHT E CALCOLO IL PESO DELLE DUE CHIAVI

// INFERIORE A 15CM
const arrayInferior = arrayLenght.inferior.reduce((acc, element) => {
    return acc + element.weight
}, 0)

console.log('PESO ZUCCHINE INFERIORE A 15CM: ' + arrayInferior);

// SUPERIORI A 15CM
const arraySuperior = arrayLenght.superior.reduce((acc, element) => {
    return acc + element.weight
}, 0)

console.log('PESO ZUCCHINE SUPERIORE A 15CM: ' + arraySuperior);

*/

// ! SCALETTA NACK 3
/*
1- CREO FUNZIONE
2- USO IL METODO I METODI SPLIT, REVERSE E JOIN
3- STAMPO
*/

// METTO LA FUNZIONE IN UNA VARIABILE
const hello = functionInvers('Ciao')

// STAMPO
console.log(hello);