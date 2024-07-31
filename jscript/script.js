console.log('JS OK')

/* 
Passaggi del codice
1. recupera il paragrafo #resume in cui mostrare il prezzo del
biglietto e lo sconto applicato in base all'età 
2. dichiara una const costKm
3. dichiara una const discountU18 con lo sconto
4. dichiara una const discountO65 con lo sconto
5. recupera i km dall'utente e li inserisce in kmTot
6. recupera dall'utente l'età e la inserisce nella const age
7. calcola il prezzo del biglietto ticketPrice moltiplicando kmTot
per costKm 
8. verifica se l'età è minore di 18, qualora lo sia calcola lo sconto
in euroDiscountU18 come ticketPrice * discountU18 e lo sottrae a
ticketPrice, sovrascrive quindi con questo ultimo risultato il valore
di ticketPrice
9. verifica se l'età è maggiore di 65, qualora lo sia calcola lo sconto
in euroDiscountO65 come ticketPrice * discountO65 e lo sottrae a
ticketPrice, sovrascrivendo poi con questo risultato ticketPrice
10. arrotonda a due cifre decimali la const ticketPrice
11. verifica se esiste una delle due tipologie di sconto, quindi
stampa il relativo sconto
12. stampa in pagina il prezzo di ticketPrice
*/

// Fase preparatoria
const resultElement = document.querySelector('.resume');
console.log(resultElement);

const costKm = 0.21; //euro al km
console.log('costKm', costKm);

const discountU18 = 0.2;
console.log('discountU18', discountU18);

const discountO65 = 0.4;
console.log('discountO65', discountO65);

// Fase di recupero dati
const kmTot = prompt('Per favore inserisci i km che percorrerai', '100');
const age = prompt('Per favore inserisci la tua età', '40');
console.log(`kmTot, ${kmTot}; age, ${age}`);

