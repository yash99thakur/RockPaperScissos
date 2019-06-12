
var play = document.querySelectorAll("#play");
var possiblities =["WIN","DRAW","LOOSE"];
var result =document.querySelector("#result");
var paper =document.querySelector(".paper");
var rock =document.querySelector(".rock");
var scissors =document.querySelector(".scissors");
	
	rock.addEventListener('click', out);
	paper.addEventListener('click', out);
	scissors.addEventListener('click', out);

var counter=0;

var win=0;
var draw=0;
var loose=0;


function out() {

	
	var temp = Math.floor(Math.random()*3);
		result.textContent = possiblities[temp]; 
		counter++;
		if (temp==0) 
			{win++;}
		else if (temp==1)
		 {draw++;}
		else if(temp==2)
		 {loose++;}
	
	

}

	