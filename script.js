let userName = prompt("What is your first name? After you click ok, the quiz will start.");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
    
};





var i = 0;

function NextQu() {
i++;
document.getElementById("intro").style.display = "none";
document.getElementById("QuestionQuiz").innerHTML = "Question "+(i+1)+": "+Questions[i];
  document.getElementById("Answer1").style.display = "inline";
    document.getElementById("Answer2").style.display = "inline";
      document.getElementById("Answer3").style.display = "inline";
      document.getElementById("Solution").style.display = "none";
      document.getElementById("CurrentQuScore").style.display = "none";
    
document.getElementById("Answer1").innerHTML=Answers[i][0];
document.getElementById("Answer2").innerHTML=Answers[i][1];
document.getElementById("Answer3").innerHTML=Answers[i][2];
//We 
  document.getElementById("Answer1").disabled = false;
    document.getElementById("Answer2").disabled = false;
      document.getElementById("Answer3").disabled = false;
//We 
document.getElementById("Solution").innerHTML=Solutions[i];
//we 
document.getElementById("Next").style.display = "none";
}


//we 
function FinishQu() {
  //s
  document.getElementById("Rolling Score").style.display="inline";
  //r
  document.getElementById("QuestionQuiz").style.display="none";
  document.getElementById("Answer1").style.display="none";
  document.getElementById("Answer2").style.display="none";
  document.getElementById("Answer3").style.display="none";
  document.getElementById("Solution").style.display="none";
  document.getElementById("CurrentQuScore").style.display="none";
  document.getElementById("Finish").style.display="none";

  clearTimeout(myTimer);
  let endTime = document.getElementById("time").textContent;
  
  
  
  
  
  }




var ScoreTotal=[];




function Answer1Select() {
  if(i<Questions.length-1){
  j=0;
  document.getElementById("Next").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
  document.getElementById("Answer1").disabled = true;
  
  document.getElementById("Answer2").style.display = "none";
  document.getElementById("Answer3").style.display = "none";
  document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
  ScoreTotal.push(Score[i][j]);
  document.getElementById("Rolling Score").innerHTML="Hey! " + userName + "  your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";
      }
      else{

  document.getElementById("Finish").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
        document.getElementById("Answer1").disabled = true;
        
        document.getElementById("Answer2").style.display = "none";
        document.getElementById("Answer3").style.display = "none";
        document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
        ScoreTotal.push(Score[i][j]);
        document.getElementById("Rolling Score").innerHTML="Hey! " + userName + " your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";


      }
    }
  function Answer2Select() {
    j=1;
    if(i<Questions.length-1){
    document.getElementById("Next").style.display = "inline";
    document.getElementById("Solution").style.display = "block";
    document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer2").disabled = true;
    document.getElementById("Answer1").style.display = "none";
    document.getElementById("Answer3").style.display = "none";
    document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
    ScoreTotal.push(Score[i][j]);
    document.getElementById("Rolling Score").innerHTML="Hey! " + userName + " your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";
  }
  else{

document.getElementById("Finish").style.display = "inline";
document.getElementById("Solution").style.display = "block";
document.getElementById("CurrentQuScore").style.display = "block";
    document.getElementById("Answer1").disabled = true;

    document.getElementById("Answer1").style.display = "none";
    document.getElementById("Answer3").style.display = "none";
    document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
    ScoreTotal.push(Score[i][j]);
    document.getElementById("Rolling Score").innerHTML="Hey! " + userName + " your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";


  }
    }
    function Answer3Select() {
      j=2;
      if(i<Questions.length-1){
      document.getElementById("Next").style.display = "inline";
      document.getElementById("Solution").style.display = "block";
      document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer3").disabled = true;
      document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer2").style.display = "none";
      document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
      ScoreTotal.push(Score[i][j]);
      document.getElementById("Rolling Score").innerHTML="Hey! " + userName + " your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";
    }
    else{

  document.getElementById("Finish").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer1").disabled = true;
      
      document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer2").style.display = "none";
      document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
      ScoreTotal.push(Score[i][j]);
      document.getElementById("Rolling Score").innerHTML="Hey! " + userName + " your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";


    }
      }


//Questions are set up in an "array", the square brackets with Q1, Q2 being the questions which we can amend each time.
var Q1 = "A variable that has not been assigned a value yet?";
var Q2 = "A collection of properties?";
var Q3 = "This will continue to run as long as condition is true?";
var Q4 = "What needs to be at the end of most javascript lines?";
var Q5 = "True or false statement?";
var Questions = [Q1,Q2,Q3,Q4,Q5];

//In a very similar way,  include our answers


var A1 = ["string", "undefined", "null"];
var A2 = ["object", "symbol", "text box"];
var A3 = ["string variable", "for loop", "function"];
var A4 = ["semicolon", "colon", "happy face"];
var A5 = ["equation", "Boulean", "expression"];
var Answers = [A1,A2,A3,A4,A5];

//...and solutions

var S1 = "Undefined is the correct answer";
var S2 = "Object is the correct answer";
var S3 = "For Loop is the correct answer";
var S4 = "semicolon is the correct answer, but you should always have a happy face with javascript";
var S5= "Boulean is the correct answer";
var Solutions = [S1,S2,S3,S4,S5,];

//...and points scored for each answer - we will keep it to 1s and 0s but you can be creative!

var SC1 = [0,1,0];
var SC2 = [1,0,0];
var SC3 = [0,1,0];
var SC4 = [1,0,0];
var SC5 = [0,1,0];
var Score = [SC1,SC2,SC3,SC4,SC5];

//We will set our first questions, answers etc. up to appear when the page loads

document.getElementById("QuestionQuiz").innerHTML = "Question 1:"+Questions[i];
document.getElementById("Answer1").innerHTML=Answers[i][0];
document.getElementById("Answer2").innerHTML=Answers[i][1];
document.getElementById("Answer3").innerHTML=Answers[i][2];

//document.getElementById("Solution").innerHTML=Solutions[i];


function getSum(a, b) {
    return a + b;
}