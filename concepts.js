/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)

function joinList(listArray){
  var outcome = "";
  for (i = 0; i < listArray.length-1; i++) {
      outcome += listArray[i] + ", ";
    }
    outcome += listArray[listArray.length];
  return outcome;
}

var concepts = joinList(conceptList);

console.log("Today I learned about " + concepts + ".");

