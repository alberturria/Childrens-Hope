// variable to simulate we're receiving the data from a database
var services = [
// Name      image       description
["Canteen", "../assests/img/canteen.jpg", "In some of our centers you will find a possibility to take a snack. There is the possibility of asking for a menu. These will change every day of the week  and they will have a cost of 8 euros. It will be open from 12:00 am until 16:00 pm everyday" ],
["Cafe", "../assests/img/cafe.jpg", "There is nothing better than take a rest in one of our cafe's. We have an enormous variety of coffe's, going from classical Nesspresso to the coolest Marocchino cafe. The opening hour is 7:00 AM and the closing hour 19:00 PM"],
["Parking", "../assests/img/parking.jpg", "In some of our centersyou will be able to park your car in one of our undergraund parking. There is video security in all of them 24hours. Showing our client card will makes you enjoy special sales!"],
["Rehabilitation", "../assests/img/rehabilitation.jpg", "The majority of our centers have personalized health care. Don't hesitate to enjoy our care for your little ones. The plan has rehabilitations every two days for those who need a bigger attention, and rehabilitations every four days for the standard children"],
["Playroom", "../assests/img/playroom.jpg", "Are you tired of common health care centers? Give an opportunity to our centers. The schedule counts with breaks every 2 hours in order to relax and enjoy with the rest of the children in our partyrooms. You will develop your social abilities playing and meeting other children of our center"],
["Education", "../assests/img/education.jpg", "Do you need help with some academic skills? This is your place. In our centers you will find personalized help in every school topic, going from maths to language. We assure you a considerable improvement in the academic aspect"]
];
	
$(document).ready(function(){
	loadServiceDescription(1);
});


function getQueryVariable() {
	var query = document.URL;
	var vars = query.split("=");
	return vars[1];
}

function loadServiceDescription(index){
	document.getElementById("serviceTittle").innerHTML= getQueryVariable();
	var current = services;
	for(var i=0; i < services.length; i++)
	{
		if(getQueryVariable()==services[i][0])
		{
			document.getElementById("serviceDescription").innerHTML= services[i][2];   
			document.getElementById("serviceImage").src=services[i][1];
		}
	}
}
	
	
		