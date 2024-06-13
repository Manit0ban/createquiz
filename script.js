var in1 = document.getElementById("in1");
var in2 = document.getElementById("in2");
var in3 = document.getElementById("in3");
var in4 = document.getElementById("in4");

document.getElementById("btn").addEventListener("click", checkAnswers);

function checkAnswers() {
let in1value = in1.value;
let in2value = in2.value;
let in3value = in3.value;
let in4value = in4.value;

  let score = 0;
console.log(in1)
  if (in1value == "college dropout") {
    document.getElementById("in1").style.backgroundColor = "lime";
    score++;
  } else {
    document.getElementById("in1").style.backgroundColor = "red";
  }

  if (in2value == "hip-hop") {
    document.getElementById("in2").style.backgroundColor = "lime";
    score++;
  } else {
    document.getElementById("in2").style.backgroundColor = "red";
  }

  if (in3value == "yeezy") {
    document.getElementById("in3").style.backgroundColor = "lime";
    score++;
  } else {
    document.getElementById("in3").style.backgroundColor = "red";
  }

  if (in4value == "jay z") {
    document.getElementById("in4").style.backgroundColor = "lime";
    score++;
  } else {
    document.getElementById("in4").style.backgroundColor = "red";
  }

  var percentage = Math.round((score / 4) * 100);
  document.getElementById("rslt").innerHTML =
    score + "/4 (" + percentage + "%)";
}