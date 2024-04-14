// CHECK
console.log('JS DATI OK');

// ! SCALETTA NACK 1 
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER CALCOLARE LE ZUCCHINE
3- STAMPO
*/


/* CREO ARRAY DI OGGETTI */
const arrayZuchini = 
[
    { variety: 'Zucchina Verde', weight: 150, length: 20 },
    { variety: 'Zucchina Gialla', weight: 120, length: 18 },
    { variety: 'Zucchina Striata', weight: 130, length: 22 },
    { variety: 'Zucchina Romanesca', weight: 140, length: 21 },
    { variety: 'Zucchina Bianca', weight: 125, length: 19 },
    { variety: 'Zucchina Nera', weight: 160, length: 24 },
    { variety: 'Zucchina Tonda', weight: 110, length: 17 },
    { variety: 'Zucchina Lunga', weight: 170, length: 26 },
    { variety: 'Zucchina Mini', weight: 90, length: 15 },
    { variety: 'Zucchina Trombetta', weight: 180, length: 28 }
];


// ! SCALETTA NACK 2
/*
1- CREO ARRAY DI 10 OGGETTI
2- USO IL METODO REDUCE PER SEPARARE LE DIMISIONI DELLE ZUCCHINE
3- CALCOLO CON IL REDUCE IL PESO DEI DUE GRUPPI
4- STAMPO
*/


/* CREO ARRAY DI OGGETTI */
const arrayZuchinis = 
[
    { variety: 'Zucchina Verde', weight: 150, length: 9 },
    { variety: 'Zucchina Gialla', weight: 120, length: 18 },
    { variety: 'Zucchina Striata', weight: 130, length: 22 },
    { variety: 'Zucchina Romanesca', weight: 140, length: 21 },
    { variety: 'Zucchina Bianca', weight: 125, length: 5 },
    { variety: 'Zucchina Nera', weight: 160, length: 24 },
    { variety: 'Zucchina Tonda', weight: 110, length: 17 },
    { variety: 'Zucchina Lunga', weight: 170, length: 12 },
    { variety: 'Zucchina Mini', weight: 90, length: 15 },
    { variety: 'Zucchina Trombetta', weight: 180, length: 10 }
];


// ! SCALETTA NACK 3
/*
1- CREO FUNZIONE
2- USO IL METODO I METODI SPLIT REVERSE E JOIN
3- STAMPO
*/


/* CREO UNA FUNZIONE A CUI MANDO COME ARGOMENTO LA PAROLA CIAO */
const functionInvers = (str) => {
    

    /* CREO UNA VARIBILE A CUI ASSEGNO LA PAROLA CIAO MA INVERITTA (OAIC) */
    const strInvers = str.split('').reverse().join('');
    

    /* RESTITUISCO LA VARIBILE */
    return strInvers
    
};

