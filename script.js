// long1


var words = ["Happy", "what", "is", "up", "dude"];



function long1(arr) {

  var myarray = [];

  words.forEach(function(word) {

    myarray.push(word.length);

  });

  return myarray;
}
console.log(long1(words));



// short4
var nums = [1, 2, 3, 4];

var add = function(a, b) {

  return a + b;

};

var multiply = function(a, b) {

  return a * b;

};

var sum = nums.reduce(add, 0);
console.log(sum);
var multiplication = nums.reduce(multiply, 1);
console.log(multiplication);

// short7


var words = ["Happy", "what", "is", "up", "dude"];

function findLongestWords(arr) {

  var longestWordsLength = 0

  words.forEach(function(word) {

    console.log(word.length);

    if (longestWordsLength < word.length) {
      longestWordsLength = word.length;

    }
  });

  return longestWordsLength;

}



// short 8


words = ["Happy", "what", "is", "up", "dude"];



function short8(arr, wordLength) {

  var myarray = [];

  words.forEach(function(word) {

    if (word.length > wordLength) {

      myarray.push(word);

    }
  });

  return myarray;

}
console.log(short8(words, 4));
