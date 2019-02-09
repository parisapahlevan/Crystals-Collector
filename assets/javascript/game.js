
var chosenRandomNumber = "";
var greenCrystal = "";
var redCrystal = "";
var blueCrystal = "";
var yellowCrystal = "";
var finalScore = []
// $(document).ready(function){
//     alert($)
// }

function generateANumber(){
    var myNumber = Math.floor(Math.random() * 120) + 19;
    return myNumber
}

function green(){
   var myGreen = Math.floor(Math.random() * 12) + 1; 
   $("#button-green").click(function() {
    $(this).html("myGreen");
    myGreen.push(addNumber);
  });
}

function red(){
    var myRed = Math.floor(Math.random() * 12) + 1; 
    return myRed
}

function blue(){
   var myBlue = Math.floor(Math.random() * 12) + 1; 
   return myBlue
}

function yellow(){
   var myYellow = Math.floor(Math.random() * 12) + 1; 
    return myYellow
}

function congratulateUser() {
    if (finalScore === chosenRandomNumber){
    alert(" CONGRATULATIONS YOU MADE IT !!") && reset the generateANumber 
}

function reconciliate(){
    alert("SORRY YOU LOST")
}




// $("button").on("click", function(){
//     $("div").fadeToggle(1000);
// })
