/*
  1. Write a function `lengths` that accepts a single parameter as an argument, namely
  an array of strings. The function should return an array of numbers where each
  number is the length of the corresponding string.
*/

var words = ["hola", "como", "estas", "tu"];

function lengths (words) {
    var charCount;
    for (i=0; i<words.length; i++) {
        var x = words[i];
        charCount.push(x.length);
    }
    return charCount;
}

/*
  2. Write a Javascript function called `transmogrifier`
  This function should accept three arguments, which you can assume will be numbers.
  The transmogrified result of three numbers is the product of the first two numbers,
  raised to the power of the third number.
  Your function should return the "transmogrified" result.
*/

function transmogrifier (a,b,c) {
  return Math.pow((a*b),c);
}

/*
  3. Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words (not letters) reversed. Don't worry
  about punctuation. I.e. "hello world" should become "world hello".
*/



/*  Solution using Concatanation */

function wordReverse (sentence) {
  var sentenceArray = sentence.split(" ");
  var newArray = [];
  var newSentence = "";
  for(i = sentenceArray.length; i>0; i--) {
    var current;
    current = sentenceArray.pop();
    newArray.push(current);
  }

  for(i=0; i<newArray.length; i++) {
      newSentence = newSentence.concat(newArray[i]);
      newSentence = newSentence.concat(" ");
  }
  newSentence.trim();
  return newSentence;
}

/*  Replace comas with space */

function wordReverse (sentence) {
  var sentenceArray = sentence.split(" ");
  var newArray = [];
  var newSentence;
  var finalSentence;
  for(i = sentenceArray.length; i>0; i--) {
    var current;
    current = sentenceArray.pop();
    newArray.push(current);
  }
  newSentence = newArray.toString();
  finalSentence = newSentence.replace(/,/g, " ");
  return finalSentence;
}





