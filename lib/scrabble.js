

/**
 * Score a word given the specs defined in the README file
 * @param  {[string]} the word to score
 * @return {[integer]} the value that the input word is worth
 */
var score = function(word) {

	//Implement me !!
var word = prompt("Enter a word please");
word = word.toUpperCase();

scores = { 'A' : 1, 'B' : 3, 'C' : 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z' : 10 };

var sum = 0;
for (var i = 0; i < word.length; i++) {
    sum += scores[word.charAt(i)];
}
return sum;
}
module.exports.score = score;
