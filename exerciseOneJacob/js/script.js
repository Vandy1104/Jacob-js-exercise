//number of employeess
// work out how to enter employee names.

//names of employess / test score values

var repeat, names =[];



while(repeat !== 'no'){
	names.push(prompt('What is your employee names?'));
	repeat = prompt('Would you like to add anther employee? yes/no');
	// document.write(names + "</br>");
}

console.log(names);

var project1 = [];
var project2 = [];
var project3 = [];


for(var n=0; n < names.length; n++ ){
	project1.push(parseInt(prompt('please enter test one scores in order')));
	project2.push(parseInt(prompt('please enter test two scores in order')));
	project3.push(parseInt(prompt('please enter test three scores in order')));
}

// end of names of employees and test score values


// overall averages of each test and person average score

var p1Average = 0;
var p2Average = 0;
var p3Average = 0;

		for (a = 0; a < project1.length; a++){
			p1Average += project1[a];
		}

		for (b = 0; b < project2.length; b++){
			p2Average += project2[b];
		}

		for (c = 0; c < project3.length; c++){
			p3Average += project3[c];
		}

		document.getElementById('p1a').innerHTML = "the average grade of test one is:" + p1Average/project1.length + "% </br>";
		document.getElementById('p2a').innerHTML = "the average grade of test two is:" + p2Average/project2.length + "% </br>";
		document.getElementById('p3a').innerHTML = "the average grade of test three is:" + p3Average/project3.length + "% </br>";

var p1Score = (project1[0] + project2[0] + project3[0])/3;
var p2Score = (project1[1] + project2[1] + project3[1])/3;
var p3Score = (project1[2] + project2[2] + project3[2])/3;

document.getElementById("1").innerHTML = names[0] + "'s average test grade is:" + p1Score + "% </br>";
document.getElementById("2").innerHTML = names[1] + "'s average test grade is:" + p2Score + "% </br>";
document.getElementById("3").innerHTML = names[2] + "'s average test grade is:" + p3Score + "% </br>";


// end of overall averages of each test and person average score

var nice = 90;
var good = 70;

if (p1Score >= nice ) {
  document.getElementById('1check').innerHTML = "eligible for increment <br>"
} else if (p1Score >= good ){
  document.getElementById('1check').innerHTML = "eligible to continue in project team <br>"
} else {
  document.getElementById('1check').innerHTML ="change designation <br>"
}


if (p2Score >= nice ) {
  document.getElementById('2check').innerHTML = "eligible for increment <br>"
} else if (p2Score >= good ){
  document.getElementById('2check').innerHTML = "eligible to continue in project team <br>"
} else {
	  document.getElementById('2check').innerHTML ="change designation <br>"
}

if (p3Score >= nice ) {
  document.getElementById('3check').innerHTML = "eligible for increment <br>"
} else if (p3Score >= good ){
  document.getElementById('3check').innerHTML = "eligible to continue in project team <br>"
} else {
	  document.getElementById('3check').innerHTML ="change designation <br>"
}





// var p1Score = (project1[0] + project2[0] + project3[0])/3;
// var p2Score = (project1[1] + project2[1] + project3[1])/3;
// var p3Score = (project1[2] + project2[2] + project3[2])/3;

// document.getElementById("1").innerHTML = names[0] + "'s average test grade is:" + p1Score + "% </br>";
// document.getElementById("2").innerHTML = names[1] + "'s average test grade is:" + p2Score + "% </br>";
// document.getElementById("3").innerHTML = names[2] + "'s average test grade is:" + p3Score + "% </br>";













console.log(project1);
console.log(project2);
console.log(project3);



