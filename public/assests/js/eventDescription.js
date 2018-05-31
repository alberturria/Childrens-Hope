$(document).ready(function(){
	loadEventDescription();
});


function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}

function loadEventDescription(){
	var eventId = getQueryVariable();

	fetch(`/events/${eventId}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
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


function addRow(event) {
	document.getElementById("eventDescription").innerText= event.description;
	//document.getElementById("eventImg").src="../assests/img/"+event.img;
	document.getElementById("eventName").innerHTML=event.name;	
}