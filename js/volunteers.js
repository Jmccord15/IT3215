var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteersList = function () {   
    // display the volunteers in the text area
    var volunteerListString="";
    for (var i = 0; i < volunteerArray.length; i++) {
        // Display the numbers in front of the names
        volunteerListString = volunteerListString + "\n" + (i+1) + ". " + volunteerArray[i];
}
    $("volunteerList").value= volunteerListString;
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteersList();

    
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // get the data from the form (hint: use the same format as from the add).

    var volunteerString = $("first_name").value + " " + $("last_name").value;
    // remove the string from the array
    for (var i = 0; i < volunteerArray.length; i++) {
        if(volunteerArray[i].trim() === volunteerString.trim()){
            volunteerArray.splice(i,1);
    }

}
    // display the volunteers and clear the add form
    displayVolunteersList();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteersList();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};