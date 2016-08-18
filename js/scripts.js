// Business Logic
//Define arrays that contain all possible numerals for a given number place
var romanOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var romanTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var romanHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var romanThousands = ["M", "MM", "MMM"];
//Array that results will be added to.
var romanResults = [];

//Converts number at one's place into numeral
var onesPlace = function (_number) {
  for (i = 0; i < romanOnes.length; i++)
    if ((_number - 1) === i) {
      romanResults.push(romanOnes[i]);
    }
};
var tensPlace = function (_number) {
  for (i = 0; i < romanTens.length; i++)
    if ((_number - 1) === i) {
      romanResults.push(romanTens[i]);
    }
};
var hundredsPlace = function (_number) {
  for (i = 0; i < romanHundreds.length; i++)
    if ((_number - 1) === i) {
      romanResults.push(romanHundreds[i]);
    }
};
var thousandsPlace = function (_number) {
  for (i = 0; i < romanThousands.length; i++)
    if ((_number - 1) === i) {
      romanResults.push(romanThousands[i]);
    }
};

var convertToRoman = function (_userInput) {
  var splitResults = _userInput.split("");
    if (_userInput.length === 4) {
      thousandsPlace(splitResults[0]);
      hundredsPlace(splitResults[1]);
      tensPlace(splitResults[2]);
      onesPlace(splitResults[3]);
    } else if (_userInput.length === 3) {
      hundredsPlace(splitResults[0]);
      tensPlace(splitResults[1]);
      onesPlace(splitResults[2]);
    } else if (_userInput.length === 2){
      tensPlace(splitResults[0]);
      onesPlace(splitResults[1]);
    } else {
      onesPlace(splitResults[0]);
    }
};
// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    romanResults.length = 0;
    var userNumber = $("#numberInput").val();
    if (userNumber > 3999) {
      alert("Please enter a number less than 4000.")
    } else if (userNumber.length > 4){
      alert("Quit trying to break our code! You know those zeroes are not necessary.  Try again.");
    } else {
      convertToRoman(userNumber);
      var finalResults = romanResults.join("");
    $("#result").text(finalResults);
    }
  });
});
