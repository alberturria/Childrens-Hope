// variable to simulate we're receiving the data from a database
var services = [
    // number of people
    // Name      image       description
    ["Canteen", "../assests/img/milan.jpg", "A brief description"],
    ["Cafeteria", "../assests/img/bologna.jpg", "A brief description"],
    ["Naples", "../assests/img/naples.jpg", "A brief description"],
    ["Rome", "../assests/img/rome.jpg", "A brief description"]
    ];
    
    $(document).ready(function(){
        loadServiceDescription(1);
    });
    
    
    function getQueryVariable(variable) {
        var query = document.URL;
        var vars = query.split("=");
        return vars[1];
    }
    
    function loadServiceDescription(index){
        document.getElementById("serviceTittle").innerHTML= getQueryVariable(location);
        var current = locations;
        for(var i=0; i < locations.length; i++)
        {
            if(getQueryVariable(location)==locations[i][0])
            {
                document.getElementById("serviceDescription").innerHTML= locations[i][2];   
                document.getElementById("serviceImage").src=locations[i][1];
            }
        }
    }
    
    
        