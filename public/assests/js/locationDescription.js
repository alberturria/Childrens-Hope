// variable to simulate we're receiving the data from a database
var locations = [
// Name      image       description
["Milano", "../assests/img/milan.jpg", "In Milan you will find our main center. It it provided wit all the services that we have. Even not being the biggest one, this center provides a great solution for those who are looking for some help. Find us in Piazza Leonardo Da Vinci."],
["Bologna", "../assests/img/bologna.jpg", "We count with one of our center in this wonderful city. Located in the historic center this small center offers you some services with the best specialist of the sector. Find us in Via Santa Margherita 3."],
["Naples", "../assests/img/naples.jpg", "Our southest center is placed in this great city. Feel the sea in this center, located in the coast of the city. The capital of Campania awaits you. Find us in Via Angelo di Costanzo 15."],
["Rome", "../assests/img/rome.jpg", "The capital of Italy is one of the locations decided to place one of our centers. We have a small center placed in the outskirts of the city. It is easy to access with car. Find us in Via Capraia 2."]
];

// simulate the relation beetwen services and location
var relation = [
["0","1","3","4","5"], // Milano
["4","5"],  // Bologna
["0","1","4"],  // Rome
["0","1","2","3"]  // Naples
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
	loadlocationDescription(1);
});


function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}

function loadlocationDescription(){
	var location = getQueryVariable();
	document.getElementById("locationTittle").innerHTML=location;
	var city;

	if (location=="Milano"){
		city=0;
	}else if (location=="Bologna"){
		city=1;
	}else if (location=="Rome"){
		city=2;
	}else{ // Naples
		city=3;
	}

	citySer=relation[city];
	document.getElementById("locationDescription").innerText= locations[city][2];
	document.getElementById("locationImg").src=locations[city][1];

	var result="<ul>";
	for(var i=0; i<citySer.length; i++)
		result+='<li><a href="serviceDescription.html?service='+services[citySer[i]][1]+'">'+services[citySer[i]][1]+'</a></li>';	
	result+="</ul>";

	document.getElementById("locationLinks").innerHTML=result;
}


