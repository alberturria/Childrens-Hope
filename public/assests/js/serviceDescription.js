// Simulate the relation beetwen services and people
var relationSP = [
["4","11","6"], // Canteen
["4","15","11"],  // Cafe
["13","4"],  // Parking
["8","7","9","12","3"],  // Rehabilitation
["10","1","0"],  // Playroom
["14","10","1", "5","2"] // Education
];
	
$(document).ready(function(){
	loadServiceDescription();
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
			data.map(fillBasicData);
		});

	fetch(`/placed/service/${serviceId}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(fillServiceData);
		});
}

function fillBasicData(service) {
	document.getElementById("serviceDescription").innerText= service.description;
	document.getElementById("serviceImage").src=service.image;
	document.getElementById("serviceTittle").innerHTML=service.name;
}

function fillServiceData(ids){
	fetch(`/locations/${ids.id_l}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(location) {
			document.getElementById("locationLinks").innerHTML+='<li><a href="locationDescription.html?location='+location[0].id+'">'+location[0].name+'</a></li>';
		});
}