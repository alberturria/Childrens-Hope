// variable to simulate we're receiving the data from a database
var services = [
// Name      image       description
["Canteen", "../assests/img/canteen.jpg", "In some of our centers you will find a possibility to take a snack. There is the possibility of asking for a menu. These will change every day of the week  and they will have a cost of 8 euros. It will be open from 12:00 am until 16:00 pm everyday" ],
["Cafe", "../assests/img/cafe.jpg", "There is nothing better than take a rest in one of our cafe's. We have an enormous variety of coffe's, going from classical Nesspresso to the coolest Marocchino cafe. The opening hour is 7:00 AM and the closing hour 19:00 PM"],
["Parking", "../assests/img/parking.jpg", "In some of our centers you will be able to park your car in one of our undergraund parking. There is video security in all of them 24hours. Showing our client card will makes you enjoy special sales!"],
["Rehabilitation", "../assests/img/rehabilitation.jpg", "The majority of our centers have personalized health care. Don't hesitate to enjoy our care for your little ones. The plan has rehabilitations every two days for those who need a bigger attention, and rehabilitations every four days for the standard children"],
["Playroom", "../assests/img/playroom.jpg", "Are you tired of common health care centers? Give an opportunity to our centers. The schedule counts with breaks every 2 hours in order to relax and enjoy with the rest of the children in our partyrooms. You will develop your social abilities playing and meeting other children of our center"],
["Education", "../assests/img/education.jpg", "Do you need help with some academic skills? This is your place. In our centers you will find personalized help in every school topic, going from maths to language. We assure you a considerable improvement in the academic aspect"]
];

// Simulate the relation beetwen services and people
var relationSP = [
["4","11","6"], // Canteen
["4","15","11"],  // Cafe
["13","4"],  // Parking
["8","7","9","12","3"],  // Rehabilitation
["10","1","0"],  // Playroom
["14","10","1", "5","2"] // Education
];

var people = [
// id     Name
["0", "Maurizia Jhonson"],
["1", "Pietro Baldi"],
["2", "Lamberta Pérez"],
["3", "Nadia Ferrari"],
["4", "Yuri Esposito"],
["5", "Isabella Ricci"],
["6", "Linda Romano"],
["7", "Antonella Greco"],
["8", "Andrea Romanini"],
["9", "Lucca Colombetti"],
["10", "Giovanni Grieco"],
["11", "Angelina Marinazzo"],
["12", "Franchesca Roman"],
["13", "Benito Camela"],
["14", "Lia Grechi"],
["15", "Davide Colombo"]
];

// simulate the relation beetwen services and location
var relationSL = [
["0","2","3"], // Canteen
["0","2","3"],  // Cafe
["3"],  // Parking
["0","3"],  // Rehabilitation
["2","1","0"],  // Playroom
["0","1"] // Education
];

var locations = [
// Name   
"Milano",
"Bologna",
"Naples",
"Rome"
];
	
$(document).ready(function(){
	loadServiceDescription(1);
});




function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}


function loadServiceDescription(){
	var serviceId=getQueryVariable();


	fetch(`/services/${serviceId}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(addRow);
		});

}

function addRow(service) {
	document.getElementById("serviceDescription").innerText= service.description;
	document.getElementById("serviceImage").src=service.image;
	document.getElementById("serviceTittle").innerHTML=service.name;

}
/*
function loadServiceDescription(){
	var serviceName=getQueryVariable();
	document.getElementById("serviceTittle").innerHTML= serviceName;
	var current = services;
	for(var i=0; i < services.length; i++){
		if(serviceName==services[i][0]){
			document.getElementById("serviceDescription").innerHTML= services[i][2];   
			document.getElementById("serviceImage").src=services[i][1];
		}
	}

	if (serviceName=="Canteen"){
		peopleWorking = relationSP[0];
		locationOffered = relationSL[0];
	}else if (serviceName=="Cafe"){
		peopleWorking = relationSP[1];
		locationOffered = relationSL[1];
	}else if (serviceName=="Parking"){
		peopleWorking = relationSP[2];
		locationOffered = relationSL[2];
	}else if (serviceName=="Rehabilitation"){
		peopleWorking = relationSP[3];
		locationOffered = relationSL[3];
	}else if (serviceName=="Playroom"){
		peopleWorking = relationSP[4];
		locationOffered = relationSL[4];
	}else{ // Education
		peopleWorking = relationSP[5];
		locationOffered = relationSL[5];
	}
	var peopleLinks="";
	for (var i=0; i<peopleWorking.length; i++) {
		peopleLinks+='<li><a href="peopleProfile.html?id='+people[peopleWorking[i]][0]+'">'+people[peopleWorking[i]][1]+'</a></li>';
	}
	
	locationLinks="";
	for (var i=0; i<locationOffered.length; i++) {
		locationLinks+='<li><a href="locationDescription.html?location='+locations[locationOffered[i]]+'">'+locations[locationOffered[i]]+'</a></li>';
	}

	document.getElementById("peopleLinks").innerHTML=peopleLinks;
	document.getElementById("locationLinks").innerHTML=locationLinks;
}*/
		