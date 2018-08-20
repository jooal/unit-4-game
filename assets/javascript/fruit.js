//need startgame function that sets random number, wins, losses, and total score to zero
//when start button pressed random number is selected from array, one start button is pressed, change it to "reset"
//need array for random number
//need math function to generate random number from array
//assign random numbers to fruit for current round
//when user clicks, it adds the values up in the total score section
//if total score is greate than random number, losses ++ and next round by resetting random number and total score 
//"reset" button now calls function reset to start next round which resets rando number and total score
var wins = 0;
$("#id-wins").html(wins);

var losses = 0;
$("#id-losses").html(losses);

var totalScore=[];
$("#id-totalscore").html("Your Total Score: " + totalScore);

var randomNumberArray = [];


var chooseNumber = Math.floor(Math.random()*101+19); 

//function startGame
function startGame () {
    var wins=0;
    //reflect on html
    // var updateWinsHtml = document.querySelector("#id-wins");
    // updateWinsHtml.textContent= wins;
    var losses=0;
    //reflet on html
    // var updateLossesHtml = document.querySelector("id-losses");
    // updateLossesHtml.textContent= losses;
    var totalScore=[];
    //reflect on html
    // var updateTotalScoreHtml=document.querySelector("id-totalscore");
    // updateTotalScoreHtml.textContent=totalScore;
    var displayRandomNumber = document.querySelector("#id-randomnumber");
    displayRandomNumber.textContent="Random Number: " + chooseNumber;
    var fruit1= Math.floor(Math.random()*11+1);
    var fruit2= Math.floor(Math.random()*11+1);
    var fruit3= Math.floor(Math.random()*11+1);
    var fruit4= Math.floor(Math.random()*11+1);
    
}
//setting start button to startGame function
$(document).on("click", "#start", function() {
    startGame();
   document.getElementById("start").textContent="Reset";//once game starts button changes to "reset"
   document.getElementById("start").id = "reset";
//    $("start").attr("id", "reset");//changing id name to call this button in reset function
})

function reset() {
    var totalScore=[];
    $("#id-totalscore").html("Your Total Score: " + totalScore);
    var chooseNumber = Math.floor(Math.random()*101+19); 
    var displayRandomNumber = document.querySelector("#id-randomnumber");
    displayRandomNumber.textContent="Random Number: " + chooseNumber;
    var fruit1= Math.floor(Math.random()*11+1);
    var fruit2= Math.floor(Math.random()*11+1);
    var fruit3= Math.floor(Math.random()*11+1);
    var fruit4= Math.floor(Math.random()*11+1);
}

$(document).on("click", "#reset", function() {
    reset();
})

//setting values to fruit
var fruit1= Math.floor(Math.random()*11+1)
console.log(fruit1);
var fruit2= Math.floor(Math.random()*11+1)
console.log(fruit2);
var fruit3= Math.floor(Math.random()*11+1)
console.log(fruit3);
var fruit4= Math.floor(Math.random()*11+1)
console.log(fruit4);

function winner () {
    alert ("You won! Click reset to play again.");
    wins++;
    $('#id-wins').text(wins);
    console.log(winner);
}

function loser () {
    alert ("You lost. Click reset to try again.")
    losses++;
    $("#id-losses").text(losses);
    console.log(loser);
}



//clicking on fruit
$('#fruit-1').on('click', function(){
    totalScore= totalScore + fruit1;
    console.log("New Total= " + totalScore);
    $('#id-totalScore').text(totalScore); 
          //Win & lose conditions
        if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        }   
  })  
  $('#fruit-2').on('click', function(){
    totalScore = totalScore + fruit2;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text(totalScore); 
        if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        } 
  })  
  $('#fruit-3').on('click', function(){
    totalScore = totalScore + fruit3;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text(totalScore);

          if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        } 
  })  
  $('#fruit-4').on('click', function(){
    totalScore = totalScore + fruit4;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text(totalScore); 
      
          if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        }
  });   


