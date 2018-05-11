// variable to simulate we're receiving the data from a database
var people = [
// number of people
12,
// Name      image       description
["Person1", "p1.png", "A brief description"],
["Person2", "p2.png", "A brief description"],
["Person3", "p3.png", "A brief description"],
["Person4", "p4.png", "A brief description"],
["Person5", "p5.png", "A brief description"],
["Person6", "p6.png", "A brief description"],
["Person7", "p7.png", "A brief description"],
["Person8", "p8.png", "A brief description"],
["Person9", "p9.png", "A brief description"],
["Person10", "p10.png", "A brief description"],
["Person11", "p11.png", "A brief description"],
["Person12", "p12.png", "A brief description"]
];

$(document).ready(function(){
	loadPeoplePage(1);
});

function loadPeoplePage(index){
	document.getElementById("indexPeopleContent").innerHTML=contentIndexSelected(index);

	document.getElementById("indexPeopleNumber").innerHTML=chooseIndexSelected(index, Math.ceil(people[0]/6));
}

function chooseIndexSelected(number, nPages){
	var result="";

	for (var i=1; i<=nPages ; i++) {
		result += '<a id="index'+i+'" ';
		if (i==number)
			result += 'class="selectedIndex"';
		else
			result += 'class="normalIndex"';

		result += ' href="#indexPeopleContent" onclick="loadPeoplePage('+i+');">'+i+'</a>';
	}

	return result;
}

function contentIndexSelected(number){
	var personal = people;
	var result="";
	
	for (var i=(number-1)*6; i<personal.length-1 && i<number*6; i++) {
		var current=personal[i+1];
		result+='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"><div class="tm-content-box tm-margin-b-40">'+
		'<a href="peopleProfile.html"><div class="photoPersonal" style="background-image: url('+"'../assests/img/people/"+current[1]+"')"+'"></div>'+
		'<h4 class="tm-gold-text">'+current[0]+'</h4>'+
		'<p>'+current[2]+'</p></a></div></div>';
	}

	return result;
}
