// variable to simulate we're receiving the data from a database
var people = [
// ID        Name            image                role            description           contact
["0", "Maurizia Jhonson", "mauriziaJhonson.jpeg", "Assistant", "I studied Bussines & Managment in 'Università degli studi di Milano'", "MJhonson@csHope.com"],
["1", "Pietro Baldi", "pietroBaldi.jpeg", "Counselor","I love to guide young people with different needs, and help them", "pBaldi@csHope.com"],
["2", "Lamberta Pérez", "lambertaPerez.jpeg", "Lawyer","I wanted a change in my life, I am happier now helping other people", "lPerez@csHope.com"],
["3", "Nadia Ferrari", "nadiaFerrari.jpg", "Psychiatrist","I studied medicine in 'Universidad de Granada'", "nFerrari@csHope.com"],
["4", "Person5", "p5.png", "A brief description", "email@hotmail.com"],
["5", "Person6", "p6.png", "A brief description", "email@hotmail.com"],
["6", "Person7", "p7.png", "A brief description", "email@hotmail.com"],
["7", "Person8", "p8.png", "A brief description", "email@hotmail.com"],
["8", "Person9", "p9.png", "A brief description", "email@hotmail.com"],
["9", "Person10", "p10.png", "A brief description", "email@hotmail.com"],
["10", "Person11", "p11.png", "A brief description", "email@hotmail.com"],
["11", "Person12", "p12.png", "A brief description", "email@hotmail.com"]
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
