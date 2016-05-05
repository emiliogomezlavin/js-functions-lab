// Question 1
function maxOfTwoNumbers(a,b) {
	if (a === b) {
		return console.log("They are the same number");
	}
	else if(a>b) {
		return a;
	}
	else {
		return b;
	}
}

// Question 2
function maxOfThree(a,b,c) {
	if (a === b && b === c) {
		return console.log("They are the same number");
	}
	else if(a>b && a>c) {
		return a;
	}
	else if (b>a && b>c) {
		return b;
	}
	else {
		return c;
	}
}

// Question 3
function isCharacterAVowel(letter) {
		if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
			return true;
		}
		else {
			return false;
		}
}

// Question 4
function sumArray(array) {
	var sum = 0;
	for(i=0; i<array.length; i++) {
		sum = sum + array[i];
	}	 
	return sum;
}


function multiplyArray(array) {
	var mult = 0;
	for(i=0; i<array.length; i++) {
		mult = mult * array[i];
	}	 
	return mult;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
};



// Question 6
var reverseString = function (string){
  var newString = "";
  for (i=string.length; i>-1; i--) {
  		newString = newString.concat(string.charAt(i));
  }
  return newString;
};


// Question 7
function findLongestWord (word) {
	var max = 1;
  	for (i=0; i<word.length; i++) {
  		if (max < word[i].length) {
  			max = word[i].length;
  		}
  	}
  	return max;
}


// Question 8
function filterLongWords (array, num) {
	var newArray = [];
 	for (i=0; i<array.length; i++) {
  		if (array[i].length > num) {
  			newArray.push(array[i]);
  		}
  	}
  	return newArray;
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount(str) {
  var newObj = {};
  for(i=0; i<str.length; i++) {
  		var currentChar = str.charAt(i);
  		var res = str.match(/currentChar/g);
  		
  }
}






