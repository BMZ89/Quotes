// https://type.fit/api/quotes
let quoteElement = document.querySelector(".quote");
let authorElement = document.querySelector(".author");
let quotes = [];


//activer le bouton

//fetch data de l'url api
//créer une fonction qui sert a integrer le resultat recherché dans l'html

let btn = document.querySelector(".new-quote");

function getquotes() {
  //declare  var where stoccking info
  fetch(`https://type.fit/api/quotes`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      quotes = response;
      let quote = quotes[Math.floor(Math.random() * quotes.length)];
      console.log(quote);
      quoteElement.textContent = quote.text;
      authorElement.textContent = quote.author;
    })
    .catch((error) => console.log(error));
}

// load quote when the file is loaded
getquotes();

btn.addEventListener("click", getquotes);
