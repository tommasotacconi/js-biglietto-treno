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
in discountAmountU18 come ticketPrice * discountU18 e lo sottrae a
ticketPrice, sovrascrive quindi con questo ultimo risultato il valore
di ticketPrice
9. verifica se l'età è maggiore di 65, qualora lo sia calcola lo sconto
in discountAmountO65 come ticketPrice * discountO65 e lo sottrae a
ticketPrice, sovrascrivendo poi con questo risultato ticketPrice
10. arrotonda a due cifre decimali la const ticketPrice
11. verifica se esiste una delle due tipologie di sconto, quindi
stampa il relativo sconto
12. stampa in pagina il prezzo di ticketPrice
*/

// Fase preparatoria
// 1.
const resultElement = document.querySelector('.resume');
console.log(resultElement);
// 2.
const costKm = 0.21; //euro al km
console.log('costKm', costKm);
// 3.
const discountU18 = 0.2;
console.log('discountU18', discountU18);
// 4.
const discountO65 = 0.4;
console.log('discountO65', discountO65);

// Fase di recupero dati
// 5. e 6.
const kmTot = prompt('Per favore inserisci i km che percorrerai', '100');
const age = prompt('Per favore inserisci la tua età', '40');
console.log(`kmTot ${kmTot}, age ${age}`);

// Fase di elaborazione dati
// 7.
let ticketPrice = kmTot * costKm;
console.log('ticketPrice', ticketPrice);

let message;

// 8.
if (age < 18) {  
  discountAmountU18 = ticketPrice * discountU18;
  ticketPrice -= discountAmountU18;
  message = `${discountAmountU18} discountAmountU18, ticketPrice ${ticketPrice}`;
}
// 9.
else if (age > 65) {
  discountAmountO65 = ticketPrice * discountO65;
  ticketPrice -= discountAmountO65;
  message = `${discountAmountO65} discountAmountO65, ticketPrice ${ticketPrice}`;
}
// 9.
if (message) {console.log(message)};
// 10.
ticketPrice = Math.round(ticketPrice * 100) / 100;
console.log(ticketPrice);
