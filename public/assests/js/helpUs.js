function sendDonation(){
	checkWrite();
	document.getElementById("donationForm").reset();
	document.getElementById("donateButton").disabled="true";
	alert("Thanks for your donation!");
}

function checkWrite(){
	console.log(document.getElementById("nameContact").value.length);
	if(document.getElementById("quantity").value.length>0 &&
	   document.getElementById("nameContact").value.length>0)
		document.getElementById("donateButton").removeAttribute("disabled");
	else
		document.getElementById("donateButton").disabled="true";
		
}