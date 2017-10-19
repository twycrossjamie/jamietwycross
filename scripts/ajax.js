function ajaxRequest () {
    var xhr2 = new XMLHttpRequest(); 
    
    xhr2.addEventListener ("load", responseReceived); //on load call response received
    
    var a = document.getElementById("artist").value; //store element from html page
    
    xhr2.open("GET" , "") //web service query
    xhr2.send(); 
}

//the call back function 
function responseReceived(e)
{
    var output = "";
    var data = JSON.parse(e.target.responseText);
    for (var i = 0; i < data.length; i++) //set a loop for the response text
        {
            //add details to the output
            output = output + "set ajax content" // add a type of data from JSON + data[i];
        }
    // put the html output into the results div 
    document.getElementById("response") = output;
}