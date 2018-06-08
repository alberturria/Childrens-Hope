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

	fetch(`/placed/location/${city}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(writeServices);
		});
}

function loadPlaced(){
	var city = getQueryVariable();

	

	fetch(`/placeds/${city}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(addRow);
		});
}



function addRow(location) {
	document.getElementById("locationDescription").innerText= location.description;
	document.getElementById("locationImg").src="../assests/img/"+location.img;
	document.getElementById("locationTittle").innerHTML=location.name;

}

function writeServices(idl){
	fetch(`/services/${idl.id_s}`)
		.then(function(response) {
			console.log(response);
			return response.json();
		})
		.then(function(service) {
			document.getElementById("serviceLinks").innerHTML+='<li><a href="serviceDescription.html?service='+service[0].id+'">'+service[0].name+'</a></li>';
		});
}