function startin(){
  document.getElementById("tut").innerHTML = "This is a tutorial on this quiz,everytime you get something correct another quiz shows up like,TADC,Math,MC,MCPE,Colors and more! did you understand? Click yes to continue or click no to do nothing.";
  document.getElementById("yesn").innerHTML = "Yes";
  document.getElementById("noy").innerHTML = "No"
}

function startq(){
  document.getElementById("que1").innerHTML = "What is the version of minecraft that is a ice cream flavor?";
  document.getElementById("ans1").innerHTML = "a. vanilla";
  document.getElementById("ans2").innerHTML = "b. chocolate";
  document.getElementById("ans3").innerHTML = "c. strawberry"
}

function correct(){
  document.getElementById("statement").innerHTML = "Correct!"
}
function wrong(){
  document.getElementById("statement").innerHTML = "Wrong!"
}
function q2(){
  document.getElementById("statement").innerHTML = "Correct!"
  document.getElementById("que2").innerHTML = "What is the name of the Jester Character in The Amazing Digital Circus?";
  document.getElementById("ans4").innerHTML = "a. Jax";
  document.getElementById("ans5").innerHTML = "b. Pomni";
  document.getElementById("ans6").innerHTML = "c. Caine"
}
function q3(){
  document.getElementById("statement").innerHTML = "Correct!";
  document.getElementById("que3").innerHTML = "What is 40 + 90?";
  document.getElementById("ans7").innerHTML = "a. 390";
  document.getElementById("ans8").innerHTML = "b. 140";
  document.getElementById("ans9").innerHTML = "c. 130"
}
function notfin(){
  alert("thanks for trying this out!Ive been working on this for the past few days and im still not finished!Stay tuned for more questions!")
  alert("translation:")
  alert("salamat sa pag-try nitong project ko! Ginagawa ko natong project na ito sa mga ilang araw at di parin ako tapos! Mag hintay sa mga update at tanong!")
}
function thanksdemo(){
  document.getElementById("website").innerHTML = "Made by: (Neo) Programmed By: (Neo) Styled(CSS) By: (Neo) JS(JavaScript) By: (Neo) Demo tester: (You)"
}
