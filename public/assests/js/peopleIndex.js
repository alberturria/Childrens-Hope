// variable to simulate we're receiving the data from a database
var people = [
// ID      Name                  image               role
["0", "Maurizia Jhonson", "mauriziaJhonson.jpeg", "Assistant"],
["1", "Pietro Baldi", "pietroBaldi.jpeg", "Counselor"],
["2", "Lamberta Pérez", "lambertaPerez.jpeg", "Lawyer"],
["3", "Nadia Ferrari", "nadiaFerrari.jpg", "Psychiatrist"],
["4", "Yuri Esposito", "yuriEsposito.jpeg", "Security"],
["5", "Isabella Ricci", "isabella.jpg", "Teacher"],
["6", "Linda Romano", "lindaRomano.png", "Waitress"],
["7", "Antonella Greco", "antonella.jpg", "Physiotherapist"],
["8", "Andrea Romanini", "andreaRomanini.jpg", "Nurse"],
["9", "Lucca Colombetti", "luccaColombetti.jpg", "Administrative"],
["10", "Giovanni Grieco", "giovanniGrieco.jpeg", "Carer"],
["11", "Angelo Marinazzo", "angelo.jpg", "Waiter"],
["12", "Francesca Roman", "fRoman.jpeg", "Doctor"],
["13", "Benito Camela", "benitoCamela.jpg", "Security"],
["14", "Lia Grechi", "liaGrechi.png", "Teacher"],
["15", "Davide Colombo", "davideColombo.jpeg", "Chef"]
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
