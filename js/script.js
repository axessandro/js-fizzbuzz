// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Print number

const row = document.querySelector(".ms_row");

// fizzCounter

for(let i = 1; i <= 100; i++) {
    // IF %3 AND %5, note counter-both
    // ELSE IF %3, note counter-3
    // ELSE IF %5, note counter-5
    
    let fizzCounter = "";
    if ( i % 3 === 0 && i % 5 === 0) {
        fizzCounter = "counter-both";
    }
    else if ( i % 3 === 0) {
        fizzCounter = "counter-3";
    }
    else if ( i % 5 === 0) {
        fizzCounter = "counter-5"
    }
    
    const cell = document.createElement("div");
    cell.classList.add("ms_cards");
    cell.classList.add(`"${fizzCounter}"`);
    row.append(cell)
    cell.innerHTML = i;
    row.append(cell);


    console.log(cell);
}
