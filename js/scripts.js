var sentence = prompt("Enter a sentence");
 var newSentence = function(sentence) {
   var upperCaseLast = sentence.charAt(sentence.length[0]).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase();

   // var upperCaseFirst = upperCaseLast.charAt(sentence.length[0]).toUpperCase() + upperCaseLast.slice(1);

   return upperCaseLast;
 };
// var reverseSentence = function(upperCaseFirst){
var upperCaseFirstLast = newSentence(sentence);
var reverseSentence = function(sentence){
  var firstLetter = upperCaseFirstLast[0];
  var reverseFirst = upperCaseFirstLast.replace(new RegExp('^' + upperCaseFirstLast[0]), upperCaseFirstLast[upperCaseFirstLast.length-1]);

  var reverseLast = reverseFirst.replace(new RegExp(reverseFirst[reverseFirst.length-1] + '$'), firstLetter);

  return reverseLast;
}
var firstLastReverse = reverseSentence(sentence);
var addOriginalSentence = function(sentence){
  var newerSentence = sentence + firstLastReverse;
  return newerSentence;
}

var indexLength = addOriginalSentence(sentence);
var divideIndex = function(sentence) {
  var divide1 = parseInt(sentence.length) / 2;
  // var result = divide1 / 2;
  var roundDown = Math.floor(divide1);
  var someLetter = sentence.charAt(roundDown);
  return someLetter + indexLength;
}
var reverseAll = divideIndex(sentence);
var reverseString = function(sentence){
  var splitString = reverseAll.split('');
  var reverseArray = splitString.reverse();
  var joinString = reverseArray.join('')
  return joinString;
}

// alert(reverseString(sentence));

$ (document).ready(function(){
  $('img#no').click(function(){
    alert(reverseString(sentence));
  });
  $('img#yes').click(function(){
    alert(sentence);
  });
});




// var sentence = prompt("Enter a sentence");
//  var newSentence = function(sentence) {
//    var upperCaseLast = sentence.slice(0, -1) + sentence.charAt(sentence.length-1).toUpperCase();
//
//    var upperCaseFirst = upperCaseLast.charAt(sentence.length[0]).toUpperCase() + upperCaseLast.slice(1);
//
//    return upperCaseFirst;
//  };
// // var reverseSentence = function(upperCaseFirst){
// var upperCaseFirstLast = newSentence(sentence);
// var reverseSentence = function(sentence){
//   var firstLetter = upperCaseFirstLast[0];
//   var reverseFirst = upperCaseFirstLast.replace(new RegExp('^' + upperCaseFirstLast[0]), upperCaseFirstLast[upperCaseFirstLast.length-1]);
//
//   var reverseLast = reverseFirst.replace(new RegExp(reverseFirst[reverseFirst.length-1] + '$'), firstLetter);
//
//   return reverseLast;
// }
//
// alert(reverseSentence(sentence));
