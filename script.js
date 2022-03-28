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

let maxNumber = 100;

//Condizionali

for (let x = 1; x <= maxNumber; x++) {
  if (x % 3 && x % 5) {
    document.write("<p>FizzBuzz</p>");
  } else {
    if (x % 3 == 0) {
      document.write("<p>Fizz</p>");
    }
    if (x % 5 == 0) {
      document.write("<p>Buzz</p>");
    } else document.write("<p>Not a multiple</p>");
  }
  console.log(x);
}

document.write("<br>");
