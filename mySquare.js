var x;
var keepGoing=true;
var D=1;
function setup(){
	createCanvas(500,500);
	x=0;
}

function draw(){
	background(0);
	rectMode(CENTER);
	rect(x,250,100,100);
	x+=D;
	if (x>width/2 && keepGoing) {
		myButton=document.createElement("button");
		myButton.textContent="Change Direction!";
		$("body").append(myButton);
		keepGoing=false;

		function changeIt(){
			D=-D;
		}
		$("button").click(changeIt);
	}
}