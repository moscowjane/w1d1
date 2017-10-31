
function obfuscate(password){
  var result = [];
  for (var i = 0; i < password.length; i++) {
    var letter = password[i];
    if (letter === "a") {
      result[i] = "4";
    } else {
      result[i] = letter;
    }
    if (letter === "e") {
      result[i] = "3";
    }
    if (letter === "o") {
      result[i] = "0";
    }
    if (letter === "l") {
      result[i] = "1";
    }
  }
  return result.join('');
}


var myArgs = process.argv.slice(2);
for (var i = 0; i < myArgs.length; i++) {
  console.log(myArgs[i], '->', obfuscate(myArgs[i]));
}


