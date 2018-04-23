// variable to simulate we're receiving the data from a database
var locations = [
// number of people
// Name      image       description
["Milano", "../assests/img/milan.jpg", "A brief description"],
["Bologna", "../assests/img/bologna.jpg", "A brief description"],
["Naples", "../assests/img/naples.jpg", "A brief description"],
["Rome", "../assests/img/rome.jpg", "A brief description"]
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
    for(var i=0; i < locations.length; i++)
    {
        if(getQueryVariable(location)==locations[i][0])
        {
            document.getElementById("locationDescription").innerHTML= locations[i][2];   
            document.getElementById("locationImg").src=locations[i][1];
        }
    }
}


    