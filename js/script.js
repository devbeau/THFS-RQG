/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



//Creates an array and fills it with objects that contain quotes and various properties.

var quotes = [
  {
  quote: 'Computers themselves, and software yet to be developed, will revolutionize the way we learn.',
  source: 'Steve Jobs',
  tag: 'Computers'
  },
  {
  quote: 'Never underestimate the bandwidth of a station wagon full of tapes hurtling down the highway.',
  source: 'Andrew S. Tanenbaum',
  citation: 'Computer Networks 3rd Ed.',
  year: 1996,
  tag: 'Computers'
  },
  {
  quote: "I don't even know how to use a parking meter, let alone a phone box.",
  source: 'Diana, Princess of Wales',
  citation: 'The Times',
  year: 1994,
  tag: "Humor"
  },
  {
  quote: 'Life’s barely long enough to get good at one thing. So be careful what you get good at.',
  source: 'Rust Cohle',
  citation: 'True Detective',
  tag: "Ability"
  },
  {
  quote: 'There is nothing so ridiculous but some philosopher has said it.',
  source: 'Cicero',
  tag: "Philosophy"
  },
  {
  quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
  source: 'Albert Einstein',
  year: 1930,
  tag: "Advice"
}
]

// Logs the elements of the quotes array into the console for debugging.

console.log(quotes);

/* Creates a function that generates a random number between 0 and the index of the last element of the quotes array.
   Then returns the contents of the array at the index generated by the RNG. */

var getRandomQuote = function (){
  var ranNum = Math.floor(Math.random()*quotes.length);
  return quotes[ranNum];
}
// Logs the randomly selected quote to the console for debugging.
console.log(getRandomQuote());

// Generates a random number between 0 and 4, and returns a string with a color
var getRandomColor = function(){
  var ranNum = Math.floor(Math.random()*5);
  if (ranNum === 0){return 'red';}
    else if (ranNum === 1){return 'blue';}
    else if (ranNum === 2){return 'green';}
    else if (ranNum === 3){return 'purple';}
    else {return 'orange';}
}

// Changes the background color of the document and the loadQuote button.
var changeBackgroundColor = function(){
  var ranColor = getRandomColor();
  document.body.style.backgroundColor = ranColor;
  loadQuote.style.backgroundColor = ranColor;
}

/* Creates a function that writes the various properties of the object selected by the 'getRandomQuote' function
   to the inner HTML of the DIV element with the 'quote-box' id. The function first checks whether the citation and year
   properties are present within the object before writing these properties. Also changes the background color,
   button color, and adds tags, if present, below the source*/ 

var printQuote = function(){
  nextQuote = getRandomQuote();
  var quoteString = '';
  
  quoteString += '<p class="quote">' + nextQuote.quote + '</p>';
  quoteString += '<p class="source">' + nextQuote.source;
  if ('citation' in nextQuote){
    quoteString += '<span class="citation">' + nextQuote.citation + '</span>';
  }
  if ('year' in nextQuote){
    quoteString += '<span class="year">' + nextQuote.year + '</span>';
  }
  if ('tag' in nextQuote){
    quoteString += '<p><span class="tag">' + nextQuote.tag + '</span></p>';
  }
  quoteString += '</p>';
  document.getElementById("quote-box").innerHTML = quoteString;
  changeBackgroundColor();
}

//Sets an 5 second interval where the printQuote function is called whether the button is pressed or not.
setInterval(printQuote, 5000);

//Event listener calls the printQuote function when the button is pressed.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);