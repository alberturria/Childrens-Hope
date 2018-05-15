// variable to simulate we're receiving the data from a database
var people = [
// ID        Name            image                role            description           contact
["0", "Maurizia Jhonson", "mauriziaJhonson.jpeg", "Assistant", "I studied Bussines & Managment in 'Università degli studi di Milano'", "MJhonson@csHope.com"],
["1", "Pietro Baldi", "pietroBaldi.jpeg", "Counselor","I love to guide young people with different needs, and help them", "pBaldi@csHope.com"],
["2", "Lamberta Pérez", "lambertaPerez.jpeg", "Lawyer","I wanted a change in my life, I am happier now helping other people", "lPerez@csHope.com"],
["3", "Nadia Ferrari", "nadiaFerrari.jpg", "Psychiatrist","I studied medicine in 'Universidad de Granada'", "nFerrari@csHope.com"],
["4", "Yuri Esposito", "yuriEsposito.jpeg", "Security", "My dream has always been to defend the weak", "yEsposito@hotmail.com"],
["5", "Isabella Ricci", "isabella.jpg", "Teacher", "I want everyone to have access to education", "iRicci@csHope.com"],
["6", "Linda Romano", "lindaRomano.png", "Waitress", "I want to help the disadvantaged", "lRomano@csHope.com"],
["7", "Antonella Greco", "antonella.jpg", "Physiotherapist", "My dream is to help everyone", "aGreco@csHope.com"],
["8", "Andrea Romanini", "andreaRomanini.jpg", "Nurse", "Anything to see a smile", "aRomanini@csHope.com"],
["9", "Lucca Colombetti", "luccaColombetti.jpg", "Administrative", "My passion is the paperwork", "lColombetti@csHope.com"],
["10", "Giovanni Grieco", "giovanniGrieco.jpeg", "Carer", "The laugh is the best medicine", "gGrieco@csHope.com"],
["11", "Angelo Marinazzo", "angelo.jpg", "Waiter", "I want everyone to have the same opportunities", "aFerrari@csHope.com"],
["12", "Francesca Roman", "fRoman.jpeg", "Doctor", "Healing the world", "fRomanatti@csHope.com"],
["13", "Benito Camela", "benitoCamela.jpg", "Security", "Always defending the weak", "bCamela@csHope.com"],
["14", "Lia Grechi", "liaGrechi.png", "Teacher", "My dream is to teach everyone", "lGrechi@csHope.com"],
["15", "Davide Colombo ", "davideColombo.jpeg", "Chef", "Cooking for future hopes", "dColombo@csHope.com"]

];

$(document).ready(function(){
	loadPeoplePage();
});

function loadPeoplePage(){
	var id = getQueryVariable();
	document.getElementById("profilePicture").src = "../assests/img/people/"+people[id][2];
	document.getElementById("namePerson").innerText= people[id][1];
	document.getElementById("description").innerText= people[id][4];
	document.getElementById("contactPerson").innerHTML= "<h3><b>Contact: </b><br>"+ people[id][5]+"</h3>";
	document.getElementById("rolePerson").innerHTML="<h3><b>Role: </b><br>"+ people[id][3]+"</h3>";
}

function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}
