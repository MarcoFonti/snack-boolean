// CHECK
console.log('JS OK');

// ! SCALETTA NACK 1 
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER CALCOLARE LE ZUCCHINE
3- STAMPO
*/


/* CON IL METODO REDUCE RECUPERO ARRAY DI DATI FORNITI PER CALCOLARE IL PESO DI TUTTI I SUI ELEMENTI */
const arrayWeight = arrayZuchinis.reduce((acc, element) => {


    /* RESTITIUSCO ACCUMULATORE + PESO ELEMENTI */
    return acc + element.weight


    /* FACCIO PARTIRE DA 0 ACCUMULATORE IN MODO DA SOMMARE IL PESO DI TUTTI GLI ELEMENTI */
}, 0)


/* CONTROLLO RISPOSTA */
console.log('PESO TOTALE: ' + arrayWeight);


// ! SCALETTA NACK 2
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER SEPARARE LE DIMISIONI DELLE ZUCCHINE
3- CALCOLO CON IL REDUCE IL PESO DEI DUE GRUPPI
4- STAMPO
*/


/* CON IL METODO REDUCE RECUPERO ARRAY DI DATI E CREO DUE ARRAY IN BASE ALLA LUNGHEZZA DEGLI ELEMENTI */
const arrayLenght = arrayZuchinis.reduce((acc, element) => {


    /* SE LA LUNGHEZZA DELLE ZUCCHINE E' MINORE O UGUALE A 15 */
    if (element.length <= 15) {


        /* METTO DENTRO ARRAY INFERIOR GLI ELEMENTI */
        acc['inferior'].push(element);


        /* ALTRIMENTI */
    } else {


        /* METTO DENTRO ARRAY SUPERIOR GLI ELEMENTI */
        acc['superior'].push(element);
    }


    /* RESTITUSCO ACCUMULATORE */
    return acc;


    /* FACCIO PARTIRE ACCUMULATORE CON DUE ARRAY DI OGGETTI VUOTI IN MODO DA RIPIRLI DATA UNA CONDIZIONE */
}, { inferior: [], superior: [] })


/* CONTROLLO RISPOSTA */
console.log(arrayZuchinis);
console.log(arrayLenght);


/* RECUPERO DENTRO ALL'ARRAYLENGHT LE ZUCCHINE CON PESO INFERIORE A 15 E UTILIZZO IL METODO REDUCE PER FARE LA SOMMA DI QUESTI ELEMENTI */
const arrayInferior = arrayLenght.inferior.reduce((acc, element) => {


    /* RESTITIUSCO ACCUMULATORE + PESO ELEMENTI */
    return acc + element.weight


    /* FACCIO PARTIRE DA 0 ACCUMULATORE IN MODO DA SOMMARE IL PESO DI TUTTI GLI ELEMENTI */
}, 0)


/* CONTROLLO RISPOSTA */
console.log('PESO ZUCCHINE INFERIORE A 15CM: ' + arrayInferior);


/* RECUPERO DENTRO ALL'ARRAYLENGHT LE ZUCCHINE CON PESO SUPERIORE A 15 E UTILIZZO IL METODO REDUCE PER FARE LA SOMMA DI QUESTI ELEMENTI */
const arraySuperior = arrayLenght.superior.reduce((acc, element) => {


    /* RESTITIUSCO ACCUMULATORE + PESO ELEMENTI */
    return acc + element.weight


    /* FACCIO PARTIRE DA 0 ACCUMULATORE IN MODO DA SOMMARE IL PESO DI TUTTI GLI ELEMENTI */
}, 0)


/* CONTROLLO RISPOSTA */
console.log('PESO ZUCCHINE SUPERIORE A 15CM: ' + arraySuperior);


// ! SCALETTA NACK 3
/*
1- CREO FUNZIONE
2- USO IL METODO I METODI SPLIT, REVERSE E JOIN
3- STAMPO
*/


/* ASSEGNO LA FUNZIONE A UNA VARIBILE PASSANDO COME PARAMENTRO LA PAROLA CIAO */
const hello = functionInvers('Ciao')


/* CONTROLLO RISPOSTA */
console.log(hello);