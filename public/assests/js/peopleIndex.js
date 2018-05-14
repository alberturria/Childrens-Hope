// variable to simulate we're receiving the data from a database
var people = [
// ID   Name      image       description
["0", "Maurizia Jhonson", "mauriziaJhonson.jpeg", "A brief description"],
["1", "Pietro Baldi", "pietroBaldi.jpeg", "A brief description"],
["2", "Lamberta Pérez", "lambertaPerez.jpeg", "A brief description"],
["3", "Nadia Ferrari", "nadiaFerrari.jpg", "A brief description"],
["4", "Person5", "p5.png", "A brief description"],
["5", "Person6", "p6.png", "A brief description"],
["6", "Person7", "p7.png", "A brief description"],
["7", "Person8", "p8.png", "A brief description"],
["8", "Person9", "p9.png", "A brief description"],
["9", "Person10", "p10.png", "A brief description"],
["10", "Person11", "p11.png", "A brief description"],
["11", "Person12", "p12.png", "A brief description"]
];

$(document).ready(function(){
	loadPeoplePage(1);
});

function loadPeoplePage(index){
	document.getElementById("indexPeopleContent").innerHTML=contentIndexSelected(index);

	document.getElementById("indexPeopleNumber").innerHTML=chooseIndexSelected(index, Math.ceil(people.length/6));
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
	
	for (var i=(number-1)*6; i<personal.length && i<number*6; i++) {
		var current=personal[i];
		result+='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"><div class="tm-content-box tm-margin-b-40">'+
		'<a href="peopleProfile.html?id='+current[0]+'"><div class="photoPersonal" style="background-image: url('+"'../assests/img/people/"+current[2]+"')"+'"></div>'+
		'<h4 class="tm-gold-text">'+current[1]+'</h4>'+
		'<p style="color: grey;">'+current[3]+'</p></a></div></div>';
	}

	return result;
}
