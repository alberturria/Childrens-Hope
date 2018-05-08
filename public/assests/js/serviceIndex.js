// variable to simulate we're receiving the data from a database
var services = [
    // number of people
    // Name      image       description
    ["Canteen", "../assests/img/milan.jpg", "A brief description"],
    ["Cafe", "../assests/img/bologna.jpg", "A brief description"],
    ["Parking", "../assests/img/naples.jpg", "A brief description"],
    ["Rome", "../assests/img/rome.jpg", "A brief description"]
    ];
    
    $(document).ready(function(){
        loadServiceDescription(1);
    });
    
    
    function getQueryVariable() {
        var query = document.URL;
        var vars = query.split("=");
        return vars[1];
    }
    
    function loadServiceDescription(index){
        document.getElementById("serviceTittle").innerHTML= getQueryVariable();
        var current = services;
        for(var i=0; i < services.length; i++)
        {
            if(getQueryVariable()==services[i][0])
            {
                document.getElementById("serviceDescription").innerHTML= services[i][2];   
                document.getElementById("serviceImage").src=services[i][1];
            }
        }
    }
    
    
        