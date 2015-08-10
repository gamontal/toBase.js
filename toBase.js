var strUp = "GHIJKLMNOPQRSTUVWXYZ".split("");                //TODO [g-z] error fix
var strLow = "ghijklmnopqrstuvwxyz".split("");              //      oct and binary exp fix

Object.prototype.in = function() {
    for(var i=0; i<arguments.length; i++)
       if(arguments[i] == this) return true;
    return false;
}

function noWhiteSpace(s) {
  return s.indexOf(' ') == -1;
}

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});


// selection proc
console.log("\nConvert from: \t\tTo:\n(1) for Base 10\t\t(a) for Base 10 \n(2) for Base 16\t\t(b) for Base 16\n(3) for Base 8\t\t(c) for Base 8\n(4) for Base 2\t\t(d) for Base 2\n\nPlease select and type in the number (separate everything with a space):\n Ex | [1 b 81]");

function selcBase() {
rl.question("\nYour selection? ", function(answer) {

  var fromSelc = answer.charAt(0); 
  var toSelc = answer.charAt(2);

  if ((answer == "")||(noWhiteSpace(answer))|| fromSelc.in("1","2","3","4") == false || toSelc.in("a","b","c","d") == false) {
    console.log("\nInvalid selection.");
    selcBase();
    return;
    }

  Converter(answer);
  rl.close();
  });
} selcBase();

// convertion proc
function Converter(usrInput) {

var fromSelc = usrInput.charAt(0);
fromSelc = parseInt(fromSelc);

var toSelc = usrInput.charAt(2);

var num = usrInput.slice(4);

if (fromSelc == 2) {
  num = parseInt(num, 16)
}
else if (isNaN(num)) {
  console.log("\nInvalid input."); return;
} else {
  num = parseInt(num);
}

var inputDec = num.toString(10);
var inputHex = num.toString(16);
var inputOct = num.toString(8);
var inputBin = num.toString(2);

if ((fromSelc == 1) && (toSelc == "a")) {
console.log("\nDecimal representation: " + inputDec);
}
else if ((fromSelc == 2) && (toSelc == "a")) {
console.log("\nDecimal representation: " + inputDec);
}
else if ((fromSelc == 3) && (toSelc == "a")) {
console.log("\nDecimal representation: " + inputDec);
}
else if ((fromSelc == 4) && (toSelc == "a")) {
console.log("\nDecimal representation: " + inputDec);
}
else if ((fromSelc == 1) && (toSelc == "b")) {
console.log("\nHexadecimal representation: " + inputHex);
}
else if ((fromSelc == 2) && (toSelc == "b")) {
console.log("\nHexadecimal representation: " + inputHex);
}
else if ((fromSelc == 3) && (toSelc == "b")) {
console.log("\nHexadecimal representation: " + inputHex);
}
else if ((fromSelc == 4) && (toSelc == "b")) {
console.log("\nHexadecimal representation: " + inputHex);
}
else if ((fromSelc == 1) && (toSelc == "c")) {
 console.log("\nOctal representation: " + inputOct);
}
else if ((fromSelc == 2) && (toSelc == "c")) {
 console.log("\nOctal representation: " + inputOct);
}
else if ((fromSelc == 3) && (toSelc == "c")) {
 console.log("\nOctal representation: " + inputOct);
}
else if ((fromSelc == 4) && (toSelc == "c")) {
 console.log("\nOctal representation: " + inputOct);
}
else if ((fromSelc == 1) && (toSelc == "d")) {
 console.log("\nBinary representation: " + inputBin);
}
else if ((fromSelc == 2) && (toSelc == "d")) {
 console.log("\nBinary representation: " + inputBin);
}
else if ((fromSelc == 3) && (toSelc == "d")) {
 console.log("\nBinary representation: " + inputBin);
}
else if ((fromSelc == 4) && (toSelc == "d")) {
 console.log("\nBinary representation: " + inputBin);
}
}

