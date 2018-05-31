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
	loadlocationDescription();
});


function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}

function loadlocationDescription(){
	var city = getQueryVariable();

	fetch(`/locations/${city}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(addRow);
		});
/*
	citySer=relation[city];
	document.getElementById("locationDescription").innerText= locations[city][2];
	document.getElementById("locationImg").src=locations[city][1];

	var result="<ul>";
	for(var i=0; i<citySer.length; i++)
		result+='<li><a href="serviceDescription.html?service='+services[citySer[i]][1]+'">'+services[citySer[i]][1]+'</a></li>';	
	result+="</ul>";

	document.getElementById("locationLinks").innerHTML=result;*/
}


function addRow(location) {
	document.getElementById("locationDescription").innerText= location.description;
	document.getElementById("locationImg").src="../assests/img/"+location.img;
	document.getElementById("locationTittle").innerHTML=location.name;

	var result="<ul>";
/*	for(var i=0; i<citySer.length; i++)
		result+='<li><a href="serviceDescription.html?service='+services[citySer[i]][1]+'">'+services[citySer[i]][1]+'</a></li>';	
	result+="</ul>";
*/
	document.getElementById("locationLinks").innerHTML=result;
}