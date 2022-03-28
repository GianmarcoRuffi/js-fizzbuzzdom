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

/*
// Individua elemento
let output = document.getElementById("output");

// Creazione append
let appended = document.createElement("div");

// Assegnazione classe
div.className = "square";

// Contenuto

div.innerHTML = "FizzBuzz";
document.body.append(div);

*/

//Condizionali

for (let i = 1; i <= maxNumber; i++) {
  {
    if (i % 15 == 0) document.write("FizzBuzz", "<br>");
    else if (i % 3 == 0) document.write("Fizz", "<br>");
    else if (i % 5 == 0) document.write("Buzz", "<br>");
    else document.write(i, "<br>");
  }
}
