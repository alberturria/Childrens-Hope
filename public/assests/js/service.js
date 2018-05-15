// variable to simulate we're receiving the data from a database
var services = [
// id         Name      image       description
["0", "Canteen", "../assests/img/canteen.jpg", "Take a rest in one of our relax places" ],
["1", "Cafe", "../assests/img/cafe.jpg", "Do you need a break? Come and try one of our caffes!"],
["2", "Parking", "../assests/img/parking.jpg", "We have a service of underground parking for park your vehicle those rainy days"],
["3", "Rehabilitation", "../assests/img/rehabilitation.jpg", "Enjoy a medical rehabilitation in our centers"],
["4", "Playroom", "../assests/img/playroom.jpg", "The little ones will have fun with different games"],
["5", "Education", "../assests/img/education.jpg", "Invest in the education of your children"]
];

// simulate the relation beetwen services and location
var relation = [
["0","1","3","4","5"], // Milano
["4","5"],  // Bologna
["0","1","4"],  // Rome
["0","1","2","3"]  // Naples
];

$(document).ready(function(){
	serviceByLocation();
});


function serviceByLocation() {
	var result="";
	var locations;

	if (document.getElementById("milano").checked)
		locations = relation[0];
	else if (document.getElementById("bologna").checked)
		locations = relation[1];
	else if (document.getElementById("rome").checked)
		locations = relation[2];
	else if (document.getElementById("naples").checked)
		locations = relation[3];
	else
		locations = ["0","1","2","3","4","5"];

	for (var i=0; i<locations.length; i++) {
		var current = services[parseInt(locations[i])];
		result += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">'+
			'<div class="tm-margin-b-30 tm-content-box">'+
				'<a href="serviceDescription.html?service='+current[1]+'">'+
					'<img src="'+current[2]+'" alt="Image" class="tm-margin-b-20 img-fluid serviceImageIndex">'+
					'<h4 class="textoIndice"><center>'+current[1]+'</center></h4>'+
				'</a>'+
				'<p>'+current[3]+'</p>'+
			'</div>'+
		'</div>';
	}

	document.getElementById("services").innerHTML= result;
}