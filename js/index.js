/*
Author: CodeMage-x
*/

function exam(score){
	
	var grade = "";
	
	if(score < 40){
		grade = "F";
	}else if(score >= 40 && score < 45){
		grade = "E";
	}else if(score >= 45 && score < 50){
		grade = "D";
	}else if(score >= 50 && score < 60){
		grade = "C";
	}else if(score >= 60 && score < 70){
		grade = "B";
	}else if(score >= 70 && score <= 100){
		grade = "A";
	}else{
		grade = "undefined";
	}
	
	return grade;
}

function result(score){
	
	var gp = "";
	
	if(score < 40){
		gp = 0;
	}else if(score >= 40 && score < 45){
		gp = 1.0;
	}else if(score >= 45 && score < 50){
		gp = 2.0;
	}else if(score >= 50 && score < 60){
		gp = 3.0;
	}else if(score >= 60 && score < 70){
		gp = 4.0;
	}else if(score >= 70 && score <= 100){
		gp = 5.0;
	}else{
		gp = "undefined";
	}
	
	return gp;
}

function check(){
	var score1 = document.getElementById("score1").value;
	var score2 = document.getElementById("score2").value;
	var score3 = document.getElementById("score3").value;
	var score4 = document.getElementById("score4").value;
	var score5 = document.getElementById("score5").value;
						
	var total = Number(score1) + Number(score2) + Number(score3) + Number(score4) + Number(score5);
	document.getElementById("tls").value = total;
						
	var average = total / 5;
	document.getElementById("avs").value = average;
						
	var point1 = document.getElementById("gp1").value;
	var point2 = document.getElementById("gp2").value;
	var point3 = document.getElementById("gp3").value;
	var point4 = document.getElementById("gp4").value;
	var point5 = document.getElementById("gp5").value;
						
	var pointTotal = Number(point1) + Number(point2) + Number(point3) + Number(point4) + Number(point5);
	var pointAverage = pointTotal / 5;
	document.getElementById("gpa").value = pointAverage;
	
	/*if(isNaN(avgscore)){
		"One or more fields is not a number"
	}
	if(eng > 100 || maths){
		"Result cannot be computed"
	}*/
	
	if(average >= 50){
		document.getElementById("remark").value = "Passed!, Proud of You."
		document.getElementById("icon").src = "thumbs_up.jpg"
	}else{
		document.getElementById("remark").value = "Failed!, You Disapponted Your Teacher."
		document.getElementById("icon").src = "sad.jpg"
	}
}