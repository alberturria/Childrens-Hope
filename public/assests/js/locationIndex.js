// variable to simulate we're receiving the data from a database
var locations = [
// Name      image       description
["Milano", "../assests/img/milan.jpg", "In Milan you will find our main center. It it provided wit all the services that we have. Even not being the biggest one, this center provides a great solution for those who are looking for some help. Find us in Piazza Leonardo Da Vinci."],
["Bologna", "../assests/img/bologna.jpg", "We count with one of our center in this wonderful city. Located in the historic center this small center offers you some services with the best specialist of the sector. Find us in Via Santa Margherita 3."],
["Naples", "../assests/img/naples.jpg", "Our southest center is placed in this great city. Feel the sea in this center, located in the coast of the city. The capital of Campania awaits you. Find us in Via Angelo di Costanzo 15."],
["Rome", "../assests/img/rome.jpg", "The capital of Italy is one of the locations decided to place one of our centers. We have a small center placed in the outskirts of the city. It is easy to access with car. Find us in Via Capraia 2."]
];

$(document).ready(function(){
    loadlocationDescription(1);
});


function getQueryVariable() {
    var query = document.URL;
    var vars = query.split("=");
    return vars[1];
}

function loadlocationDescription(index){
    document.getElementById("locationTittle").innerHTML= getQueryVariable();
    var current = locations;
    for(var i=0; i < locations.length; i++)
    {
        if(getQueryVariable()==locations[i][0])
        {
            document.getElementById("locationDescription").innerHTML= locations[i][2];   
            document.getElementById("locationImg").src=locations[i][1];
        }
    }
}


    