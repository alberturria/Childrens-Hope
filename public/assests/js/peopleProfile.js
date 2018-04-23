var people_profile = ["Nombre1", "profilePic.png", "Coordinator","nombre1@gmail.com"];



$(document).ready(function(){
	loadPeoplePage();
});

function loadPeoplePage(){
  
    document.getElementById("profilePicture").src = "../assests/img/"+people_profile[1];
    document.getElementById("namePerson").innerHTML= people_profile[0];
    document.getElementById("contactPerson").innerHTML= "<h3><b>Contact: </b><br>"+  people_profile[3]+"</h3>";
    document.getElementById("rolePerson").innerHTML="<h3><b>Role: </b><br>"+ people_profile[2]+"</h3>";
    
}




