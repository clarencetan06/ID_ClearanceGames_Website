//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b62c0a969f06502871a9b2";
    getContacts();
    $("#add-update-msg").hide();
    $("#add-update-error-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let contactName = $("#contact-name").val();
      let contactPassword = $("#contact-password").val();
      let score1 = 0;
      let score2 = 0;
      let score3 = 0;
      let score4 = 0;
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name": contactName,
        "password": contactPassword,
        "score 1": score1,
        "score 2": score2,
        "score 3": score3,
        "score 4": score4,
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-f832.restdb.io/rest/contact",
        "method": "POST", //we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
            //@TODO use loading bar instead
            //disable our button or show loading bar
            $("#contact-submit").prop("disabled", true);
            //clear our form using the form id and triggering it's reset feature
            $("#add-contact-form").trigger("reset");
          }
    };
    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#add-update-msg").show().fadeOut(3000);
        $("#contact-submit").prop("disabled", true);
        
        //update our table 
        getContacts();
      }).fail(function(jqXHR, textStatus, errorThrown) {
        $("#add-update-error-msg").show().fadeOut(3000);
        $("#contact-submit").prop("disabled", false);
      });
    });//end click 
    function getContacts(limit = 10, all = true) {

        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://interactivedev-f832.restdb.io/rest/contact",
          "method": "GET", //[cher] we will use GET to retrieve info
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
        }
    
        //[STEP 8]: Make our AJAX calls
        //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
        //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
        $.ajax(settings).done(function (response) {
          
          let content = "";
    
          for (var i = 0; i < response.length && i < limit; i++) {
            //console.log(response[i]);
            //[METHOD 1]
            //let's run our loop and slowly append content
            //we can use the normal string append += method
            /*
            content += "<tr><td>" + response[i].name + "</td>" +
              "<td>" + response[i].email + "</td>" +
              "<td>" + response[i].message + "</td>
              "<td>Del</td><td>Update</td</tr>";
            */
    
            //[METHOD 2]
            //using our template literal method using backticks
            //take note that we can't use += for template literal strings
            //we use ${content} because -> content += content 
            //we want to add on previous content at the same time
            content = `${content}<tr id='${response[i]._id}'>
            <td>${response[i].name}</td>
            <td>${response[i].password}</td>
            <td><a href='#' class='delete'>
            data-id='${response[i]._id}'>Del</a></td>
            <td><a href='#update-contact-container' class='update'
            data-id='${response[i]._id}' 
            data-msg='${response[i].name}' 
            data-name='${response[i].password}'>Update</a></td></tr>`;
          }
        });
    }
})