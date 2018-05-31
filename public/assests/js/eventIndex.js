$(document).ready(function(){
	loadEvents();
});

function loadEvents(){
	var result="";

	fetch(`/events`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(addRow);
		});

}


function addRow(events) {
		console.log(data);	
}




/*

<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div class="tm-content-box">
						<a href="eventDescription.html?location=Milano">
							<img src="../assests/img/conference.jpg" alt="Image" class="tm-margin-b-20 img-fluid serviceImageIndex">
							<h4 class="textoIndice"><center>Comprehensive meeting</center></h4>
						</a>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div class="tm-content-box">
						<a href="eventDescription.html?location=Bologna">
							<img src="../assests/img/run.png" alt="Image" class="tm-margin-b-20 img-fluid serviceImageIndex">
							<h4 class="textoIndice"><center>Solidary run</center></h4>
						</a>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div class="tm-content-box">
						<a href="eventDesctiption.html?location=Rome">
							<img src="../assests/img/barbacue.jpg" alt="Image" class="tm-margin-b-20 img-fluid serviceImageIndex">
							<h4 class="textoIndice"><center>Barbecue in the park</center></h4>
						</a>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div class="tm-content-box">
						<a href="eventDescription.html?location=Naples">
							<img src="../assests/img/conference1.jpg" alt="Image" class="tm-margin-b-20 img-fluid serviceImageIndex">
							<h4 class="textoIndice"><center>Conference "welfare food"</center></h4>
						</a>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div class="tm-content-box">
						<a href="eventDescription.html?location=Naples">
							<img src="../assests/img/football.jpg" alt="Image" class="tm-margin-b-20 img-fluid serviceImageIndex">
							<h4 class="textoIndice"><center>Football tournament against cancer</center></h4>
						</a>
					</div>
				</div>*/