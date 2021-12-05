// Setting up variables to access each button

var output = document.getElementById("output");
var addSign = document.getElementById("plus-sign");
var minusSign = document.getElementById("minus-sign");
var multiplySign = document.getElementById("multiply-sign");
var divideSign = document.getElementById("divide-sign");
var equalSign = document.getElementById("equal-sign");
var clear = document.getElementById("clear");
var dot = document.getElementById("dot");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

const btns = document.querySelectorAll('button');

console.log(btns);
btns.forEach(btn => { 
    btn.addEventListener("click", buttonClicked());
});

function buttonClicked() {
    
}