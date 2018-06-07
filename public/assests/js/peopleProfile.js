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

// Simulate the relation beetwen services and people
var relationSP = [
// idService //idPerson
["4"], // 0
["4", "5"], // 1
["5"], // 2
["3"], // 3
["0", "1", "2"], // 4
["5"], // 5
["0"], // 6
["3"], // 7
["3"], // 8
["3"], // 9
["4","5"], // 10
["0","1"], // 11
["3"], // 12
["2"], // 13
["5"], // 14
["1"] // 15
];

var services = [
// id     Name
["0", "Canteen"],
["1", "Cafe"],
["2", "Parking"],
["3", "Rehabilitation"],
["4", "Playroom"],
["5", "Education"]
];

$(document).ready(function(){
	loadPeoplePage();
});


function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}

function loadPeoplePage(){
	var id  = getQueryVariable();


		fetch(`/people/${id+1}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(addRow);
		});
	/*
	document.getElementById("profilePicture").src = "../assests/img/people/"+people[id][2];
	document.getElementById("namePerson").innerText= people[id][1];
	document.getElementById("description").innerText= people[id][4];
	document.getElementById("contactPerson").innerHTML= "<h3><b>Contact: </b><br>"+ people[id][5]+"</h3>";
	document.getElementById("rolePerson").innerHTML="<h3><b>Role: </b><br>"+ people[id][3]+"</h3>";
	*/
	var servicesOffered="<h3><b>Service: </b><br><ul>";
	var idsService=relationSP[id];
	for(var i=0; i<idsService.length; i++){
		servicesOffered+='<li><a href="serviceDescription.html?service='+services[idsService[i]][1]+'">'+services[idsService[i]][1]+'</a></li>';
	}
	servicesOffered+="</ul></h3>";
	document.getElementById("service").innerHTML=servicesOffered;
	
}

function addRow(people) {
	document.getElementById("description").innerText= people.description;
	document.getElementById("profilePicture").src="../assests/img/people/"+people.image;
	document.getElementById("namePerson").innerHTML=people.name;
	document.getElementById("rolePerson").innerHTML=people.role;
	document.getElementById("contactPerson").innerHTML=people.email;
	

	//var result="<ul>";
/*	for(var i=0; i<citySer.length; i++)
		result+='<li><a href="serviceDescription.html?service='+services[citySer[i]][1]+'">'+services[citySer[i]][1]+'</a></li>';	
	result+="</ul>";
*/
	//document.getElementById("locationLinks").innerHTML=result;
}


