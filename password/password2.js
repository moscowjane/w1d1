function obfuscateLetter(letter){
  switch(letter){
  case 'a'; return '4';
  //etc..
  default; return letter;

  }
}



function obfuscate(password){
  var result = [];
  for (var i = 0; i < password.length; i++) {
    result += obfscuateLetter(password[i]);
  }
  return result.join('');
}


var myArgs = process.argv.slice(2);
for (var i = 0; i < myArgs.length; i++) {
  console.log(myArgs[i], '->', obfuscate(myArgs[i]));
}


