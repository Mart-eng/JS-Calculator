// Setting up variables to access each button

var output = document.getElementById("output");
var addSign = document.getElementById("plus-sign").addEventListener("click", buttonClicked);
var minusSign = document.getElementById("minus-sign").addEventListener("click", buttonClicked);
var multiplySign = document.getElementById("multiply-sign").addEventListener("click", buttonClicked);
var divideSign = document.getElementById("divide-sign").addEventListener("click", buttonClicked);
var equalSign = document.getElementById("equal-sign").addEventListener("click", buttonClicked);
var clear = document.getElementById("clear").addEventListener("click", buttonClicked);
var dot = document.getElementById("dot").addEventListener("click", buttonClicked);
var zero = document.getElementById("zero").addEventListener("click", buttonClicked);
var one = document.getElementById("one").addEventListener("click", buttonClicked);
var two = document.getElementById("two").addEventListener("click", buttonClicked);
var three = document.getElementById("three").addEventListener("click", buttonClicked);
var four = document.getElementById("four").addEventListener("click", buttonClicked);
var five = document.getElementById("five").addEventListener("click", buttonClicked);
var six = document.getElementById("six").addEventListener("click", buttonClicked);
var seven = document.getElementById("seven").addEventListener("click", buttonClicked);
var eight = document.getElementById("eight").addEventListener("click", buttonClicked);
var nine = document.getElementById("nine").addEventListener("click", buttonClicked);


function buttonClicked() {
    console.log(this.id);
    switch(Event.getElementById) {
        case addSign:
            console.log("hi");

    }
    event.preventDefault();
}