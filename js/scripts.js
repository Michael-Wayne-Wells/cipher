var sentence = prompt("Enter a sentence");
 var newSentence = function(sentence) {
   var upperCaseLast = sentence.slice(0, -1) + sentence.charAt(sentence.length-1).toUpperCase();
   var upperCaseFirst = upperCaseLast.charAt(sentence.length[0]).toUpperCase() + upperCaseLast.slice(1);

   return upperCaseFirst;
 };
 // var upperCaseFirst = function(sentence){
 //    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
 // };

//
// console.log(upperCaseFirst(sentence));
 alert(newSentence(sentence));
