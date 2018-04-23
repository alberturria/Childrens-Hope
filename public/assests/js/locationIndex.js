// variable to simulate we're receiving the data from a database
var locations = [
// number of people
// Name      image       description
["Milano", "./img/milan.png", "A brief description"],
["Bologna", "./img/bologna.png", "A brief description"],
["Naples", "./img/naples.png", "A brief description"],
["Sicilia", "./img/rome.png", "A brief description"],
["Pisa", "./img/servicio.png", "A brief description"]
];

$(document).ready(function(){
    loadlocationDescription(1);
});


function getQueryVariable(variable) {
    var query = document.URL;
    var vars = query.split("=");
    return vars[1];
}

function loadlocationDescription(index){
    document.getElementById("locationTittle").innerHTML= getQueryVariable(location);
    var current = locations;
    for(var i=0; i < locations.length/3; i++)
    {
        if(getQueryVariable(location)==locations[i][0])
        {
            document.getElementById("locationDescription").innerHTML= locations[i][2];   
            document.getElementById("locationImg").src=locations[i][1];
        }
    }
}


    