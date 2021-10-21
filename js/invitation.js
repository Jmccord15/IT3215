//function created to replace the content
function replaceContent() {
	//declaring the variables
   
	var RecipientName;
    var hostName;
     
    
	//setting the variable to the input field's id named recipientNameInput's value
	RecipientName = document.getElementById("recipientNameInput").value;
    console.log('Variable RecipientName:' + RecipientName);
    
    hostName = document.getElementById("hostNameInput").value;
    console.log('Variable HostName:' + hostName);
    
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = RecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = hostName;
} 