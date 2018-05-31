$(document).ready(function(){
	loadNews();
});

function loadNews(){
	document.getElementById("myNews").innerHtml="";

	fetch(`/news`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			data.map(addRow);
		});

}

function addRow(news) {
	let result="";
	result += '<div class="wrapNew col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">';
	result += '<img class="imageNew" src="../assests/img/'+news["img"]+'">';
    result += '<div class="contentNew">';
    result += '<div class="contentNew dateNew">';
    result += convertDateFormat(news["date"]);
    result += '</div>';
    result += '<div class="contentNew titleNew">';
    result += news["tittle"];
    result += '<div class="contentNew bodyNew">';
    result += news["body"];
    result += '</div></div></div>';
   
	document.getElementById("myNews").innerHTML+=result;
}

function convertDateFormat(string) {
  var date = string.split('-');
  return date[2] + '/' + date[1] + '/' + date[0];
}