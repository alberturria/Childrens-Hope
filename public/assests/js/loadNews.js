// variable to simulate we're receiving the data from a database, order by date
var newsDB = [
// Title               Image     Date       Body
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Napoles new cafe", "cafe_new.jpg", "2017-08-22", "Opening of the new cafe in Naples for children of all ages."],
["New playrooms in Rome and Bologna", "playroom_new.jpg", "2017-06-10", "From next week, children will be able to enjoy our new playrooms in Rome and Bologna free of charge."],
["Parking reform", "parking_new.jpg", "2018-03-13", "After a year today, the new opening of the renovated car park is made in our center in Naples so that parents have easier access to our facilities."],
["New lessons", "musicaa_new.jpg", "2017-07-12", "In our center in Milan, children can now choose to have music lessons with professional musicians."],
["Excursion to Venice", "Venecia_new.jpg", "2017-05-08", "The next month a trip to Venice is made from all our centers, the inscriptions have already been opened."],
["Successful excusion", "parma_new.jpg", "2017-10-28", "Last month's trip to Parma was a success, more excursions are expected in the future."],
["New menu", "menu_new.jpg", "2017-11-19", "Two new menus are already available at our centers in Milan and Naples"],
["New professionals in our centers", "profesionals_new.jpg", "2018-03-01", "From the next week we will have three new professionals in our rehabilitation centers to offer a better service."],
["Scholarships", "becas_new.jpg", "2017-09-10", "Now we have in our study centers new scholarships so that children can continue studying."],
];

$(document).ready(function(){
	loadNews();
});

function loadNews(){
	var news = newsDB;
	var result="";
	var nNews = news.length;

	for (var i=0; i<news.length; i++) {
		result+='<div class="wrapNew col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">' +
			'<img class="imageNew" src="../assests/img/'+news[i][1]+'">' +
			'<div class="contentNew">' +
				'<div class="contentNew dateNew">' + 
					convertDateFormat(news[i][2])+
				'</div>' +
				'<div class="contentNew titleNew">' + 
					news[i][0]+
				'</div>' +
				'<div class="contentNew bodyNew">' +
					news[i][3] +
				'</div></div></div>';
	}

	document.getElementById("news").innerHTML=result;
}

function convertDateFormat(string) {
  var date = string.split('-');
  return date[2] + '/' + date[1] + '/' + date[0];
}
