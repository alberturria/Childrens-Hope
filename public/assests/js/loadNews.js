// variable to simulate we're receiving the data from a database, order by date
var newsDB = [
// Title               Image     Date       Body
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "cafe.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "education.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
["Milan new center", "milan.jpg", "2018-01-22", "The work continues to build the new center of Children's Hope. 'The building is still far to be done, but we think it will be finished to the end of the year' says the chief of the project"],
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
