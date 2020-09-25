$(document).ready(function () {

  // Add an event listener  
  $("#covidLink").click(function () {
    requestVirusData();
    return false;
  });

});

function requestVirusData() {
  // Variable to hold request 
  var request;

  // Prevent default posting of form  
  // put here to work in case of errors 
  //event.preventDefault(); 

  // Abort any pending request 
  if (request) {
    request.abort();
  }

  //   request = {
  //     "url": "https://api.covid19api.com/summary",
  //     "method": "GET",
  //     "timeout": 0,
  //   };

  //   $.ajax(request).done(function (response) {
  //     console.log(response);
  //   });




  // Send the request to API for data 
  request = $.ajax({
    url: "https://api.covid19api.com/summary",
    type: "GET",
    // data: { i:, q: $("#contains").val()} 
  });



  // Callback handler for success 
  request.done(function (response, textStatus, jqXHR) {
    console.log(response);
    // Calling formal search after getting data from api 
    //formatSearchResults(response); 
  });
}