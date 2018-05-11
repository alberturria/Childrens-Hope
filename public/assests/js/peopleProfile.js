// variable to simulate we're receiving the data from a database
var people = [
// ID   Name      image       role        contact
["0", "Person1", "p1.png", "A brief description", "email@hotmail.com"],
["1", "Person2", "p2.png", "A brief description", "email@hotmail.com"],
["2", "Person3", "p3.png", "A brief description", "email@hotmail.com"],
["3", "Person4", "p4.png", "A brief description", "email@hotmail.com"],
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
	document.getElementById("namePerson").innerHTML= people[id][1];
	document.getElementById("contactPerson").innerHTML= "<h3><b>Contact: </b><br>"+ people[id][4]+"</h3>";
	document.getElementById("rolePerson").innerHTML="<h3><b>Role: </b><br>"+ people[id][3]+"</h3>";
}

function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}
