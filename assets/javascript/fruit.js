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

var totalScore=0;
$("#id-totalscore").html("Your Total Score: " + totalScore);

var randomNumberArray = [];

//setting values to fruit 
var fruit1= Math.floor(Math.random()*11+1);
var fruit2= Math.floor(Math.random()*11+1);
var fruit3= Math.floor(Math.random()*11+1);
var fruit4= Math.floor(Math.random()*11+1);


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
    var totalScore=0;
    //reflect on html
    // var updateTotalScoreHtml=document.querySelector("id-totalscore");
    // updateTotalScoreHtml.textContent=totalScore;
    var displayRandomNumber = document.querySelector("#id-randomnumber");
    displayRandomNumber.textContent="Random Number: " + chooseNumber;
    fruit1;
    fruit2;
    fruit3;
    fruit4;
   
    
}
//setting start button to startGame function
$(document).on("click", "#start", function() {
    startGame();
   document.getElementById("start").textContent="Reset";//once game starts button changes to "reset"
   document.getElementById("start").id = "reset";
//    $("start").attr("id", "reset");//changing id name to call this button in reset function
})

function reset() {
    var totalScore=0;
    $("#id-totalscore").html("Your Total Score: " + totalScore);
    //var chooseNumber = Math.floor(Math.random()*101+19); 
    //var displayRandomNumber = document.querySelector("#id-randomnumber");
    chooseNumber = Math.floor(Math.random()*101+19); 
    displayRandomNumber = document.querySelector("#id-randomnumber");
    displayRandomNumber.textContent="Random Number: " + chooseNumber;
    fruit1; //if you just have fruit1; then it keeps first number assigned to fruit1 
    fruit2; 
    fruit3;
    fruit4;
}

$(document).on("click", "#reset", function() {
    reset();
})


function winner () {
    alert ("You won! Click reset to play again.");
    wins++;
    $('#id-wins').text("Wins: " + wins);
    console.log(winner);
    totalScore=0;
    
}

function loser () {
    alert ("You lost. Click reset to try again.")
    losses++;
    $("#id-losses").text("Losses: " + losses);
    console.log(loser);
    totalScore=0;
}

//clicking on fruit

$(document).on("click", "#fruit-1", function(){
  console.log("click");
    totalScore += fruit1;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text("Your Total Score: " + totalScore); 
          //Win & lose conditions
        if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        }   
  })  
  $(document).on("click", "#fruit-2", function(){
    totalScore += fruit2;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text("Your Total Score: " + totalScore); 
        if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        } 
  })  
  $(document).on("click", "#fruit-3", function(){
    totalScore += fruit3;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text("Your Total Score: " + totalScore);

          if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        } 
  })  
  $(document).on("click", "#fruit-4", function(){
    totalScore += fruit4;
    console.log("New Total= " + totalScore);
    $('#id-totalscore').text("Your Total Score: " + totalScore); 
      
          if (totalScore == chooseNumber){
          winner();
        }
        else if ( totalScore > chooseNumber){
          loser();
        }
  });   


