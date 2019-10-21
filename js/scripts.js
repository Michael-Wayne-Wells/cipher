var sentence = prompt("Enter a sentence");
 var newSentence = function(sentence) {
   var upperCaseLast = sentence.slice(0, -1) + sentence.charAt(sentence.length-1).toUpperCase();

   var upperCaseFirst = upperCaseLast.charAt(sentence.length[0]).toUpperCase() + upperCaseLast.slice(1);

    var firstLetter = upperCaseFirst[0];
    var reverseFirst = upperCaseFirst.replace(new RegExp('^' + upperCaseFirst[0]), upperCaseFirst[upperCaseFirst.length-1]);

    var reverseLast = reverseFirst.replace(new RegExp(reverseFirst[reverseFirst.length-1] + '$'), firstLetter);

   return reverseLast;
   alert(reverseSentence);
 };
// var reverseSentence = function(upperCaseFirst){
alert(newSentence(sentence));
