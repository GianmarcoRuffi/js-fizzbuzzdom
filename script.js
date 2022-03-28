/*Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

// Variabili

const maxNumber = 100;

var n = Math.floor(Math.random() * 1000 + 1);

//Condizionali

for (let i = 1; i <= maxNumber; i++) {
  if (n) {
    var output = "";
    if (maxNumber % 3 == 0) output += "Fizz";
    if (maxNumber % 5 == 0) output += "Buzz";
    prompt(output || n);
  }
}

console.log(output);
console.log(i);
