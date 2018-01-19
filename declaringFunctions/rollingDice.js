// problem is to roll a dice a number of times
// input is from the command line
// create var for string to show result
// create a var to hold the input argument from command line and turn it into a number
// loop to that var
// assign a random number to each loop
// add number to a string that says Rolled (total dice rolled) dice: (showed value)


var numRolls = Number(process.argv[2]);

function roll(numRolls) {
  var showResult = "Rolled " + numRolls + " dice:"
  for (var i = 0; i < numRolls; i++) {
    var ranNum = Math.floor(Math.random() * Math.floor(6)) + 1;
    if (i === numRolls - 1) {
      showResult += ranNum + "." ;
    } else {
      showResult += ranNum + ", ";
    }
  }
  return showResult;
}








