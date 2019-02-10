
var CurrentScore = 0;
var TargetScore = 0;
var wins = 0;
var losses = 0;
TargetScore = generateANumber(102, 19);

blueNum = generateANumber(12, 1);
greenNum = generateANumber(12, 1);
yellowNum = generateANumber(12, 1);
redNum = generateANumber(12, 1);

$(document).ready(function () {

    


    $("#randomScore").text(TargetScore)

    $("#button-blue").click(function () {
        AddingScores(blueNum)
        CheckWinOrLose()
    })

    $("#button-red").click(function () {
        AddingScores(redNum)
        CheckWinOrLose()
    })

    $("#button-green").click(function () {
        AddingScores(greenNum)
        CheckWinOrLose()
    })

    $("#button-yellow").click(function () {
        AddingScores(yellowNum)
        CheckWinOrLose()
    })

})

function reset(){
    location.reload();
}

function generateANumber(a, b) {
    var myNumber = Math.floor(Math.random() * a) + b;
    return myNumber
}

function CheckWinOrLose() {
    if (TargetScore === CurrentScore) {
        alert(" CONGRATULATIONS YOU MADE IT !!");
        wins++
        $("#wins").text(wins)
    } else if (CurrentScore > TargetScore) {
        alert("You Lost");
        losses++
        $("#losses").text(losses)
    }
}

function AddingScores(Score) {
    CurrentScore += Score;
    $("#currentNumber").text(CurrentScore)

}

function restart(){
    TargetScore = generateANumber(102, 19); 
    blueNum = generateANumber(12, 1);
    greenNum = generateANumber(12, 1);
    yellowNum = generateANumber(12, 1);
    redNum = generateANumber(12, 1);
    $("#randomScore").text(TargetScore)
    CurrentScore = 0;
    $("#currentNumber").text(CurrentScore) 
}




