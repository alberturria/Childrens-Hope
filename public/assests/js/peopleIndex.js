// variable to simulate we're receiving the data from a database
var people = [
// ID      Name                  image               role
["0", "Maurizia Jhonson", "mauriziaJhonson.jpeg", "Assistant"],
["1", "Pietro Baldi", "pietroBaldi.jpeg", "Counselor"],
["2", "Lamberta Pérez", "lambertaPerez.jpeg", "Lawyer"],
["3", "Nadia Ferrari", "nadiaFerrari.jpg", "Psychiatrist"],
["4", "Yuri Esposito", "p5.png", "Security"],
["5", "Isabella Ricci", "p6.png", "Teacher"],
["6", "Linda Romano", "p7.png", "Waiter"],
["7", "Antonella Greco", "p8.png", "Physiotherapist"],
["8", "Andrea Romanini", "p9.png", "Nurse"],
["9", "Lucca Colombetti", "p10.png", "Administrative"],
["10", "Giovanni Grieco", "p11.png", "Carer"],
["11", "Angelina Marinazzo", "p12.png", "Waiter"],
["12", "Franchesca Romanatti", "p13.png", "Doctor"],
["13", "Benito Camela", "p14.png", "Security"],
["14", "Lia Grechi", "p15.png", "Teacher"],
["15", "Davide Colombo ", "p12.png", "Chef"]
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
