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
appended.setAttribute ("class", "row")

// Contenuto

div.innerHTML = "FizzBuzz";
document.body.append(div);




<div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-2">
            <div class="square">Roba</div>
          </div>
        </div>


*/

//Create elements

const output = document.getElementById("output");
const row = document.createElement("div");
row.setAttribute("class", "row");

//Condizionali

for (let i = 1; i <= maxNumber; i++) {
  //Creo colonna con classi

  const col = document.createElement("div");
  col.setAttribute("class", " g-3 col-12 col-sm-6 col-md-4 col-lg-2");
  //

  // Creo div box con classi
  const box = document.createElement("div");
  box.setAttribute("class", "square");
  let value;
  //

  if (i % 15 == 0) {
    console.log("fizzbuzz");
    value = "fizzbuzz";
  } else if (i % 3 == 0) {
    value = "fizz";
  } else if (i % 5 == 0) {
    value = "buzz";
  } else {
    box.innerHTML = i;
    value = i;
  }
  box.innerHTML = value;
  box.classList.add(value);
  col.append(box);
  row.append(col);
}

output.append(row);
