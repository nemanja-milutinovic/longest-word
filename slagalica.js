var fs = require('fs');
var words = fs.readFileSync('sr.txt').toString();
words = words.split('\n');

words.sort(function(a,b){ return a.length - b.length;});

var letters = 'imaščreovevnj';
var regex = new RegExp('[^'+letters+']');
var longestWord = '';
var allWords = [];

console.log(countTheLetters(letters));


for (var testWord of words) {

	if(testWord.match(regex)) continue;
	var letterRepetition = countTheLetters(letters);
	var isOk = true;

	for(var i = 0; i < testWord.length; ++i){
		var l = testWord.charAt(i);

		if(isNaN(letterRepetition[l]))	break;
		--letterRepetition[l];
		if(letterRepetition[l] < 0) isOk = false;
	}

	if(isOk && (testWord.length >= longestWord.length)){
		longestWord = testWord;	
		allWords.push(testWord);
	}
}

console.log('LONGEST :: '+longestWord +' ('+longestWord.length+')');
allWords.sort((a, b) => {return b.length - a.length});

for(var i = 0; i < 10; ++i){
	console.log(allWords[i] + ' ('+allWords[i].length+')');
}


function countTheLetters(str){

	var letterRepetition = [];
	for(var i = 0; i < str.length; ++i){
		var l = str[i];
		letterRepetition[l] = (isNaN(letterRepetition[l])? 1 : letterRepetition[l] + 1);
	}

	return letterRepetition;
}
