$(document).ready(function () {
    const APIKEY = "63b62c0a969f06502871a9b2";
    $("#error-msg").hide();
    // $("#success-msg").hide();
    $("#login-form").submit(function(event) {
        event.preventDefault();
        
        var name = $("#name").val();
        var password = $("#password").val();
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-f832.restdb.io/rest/contact?",
            "method": "GET",
            "headers": {
                "content-Type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
        };
        
        
        $.ajax(settings).done(function (response) {
            if (response.length === 0) {
                $("#error-msg").show();
            } else if (response[0].password === password) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", response[0].username);
            } else {
                $("#error-msg").show();
            }
        });
        function getContacts(limit = 10, all = true) {

        $.ajax(settings).done(function (response) {
            console.log(response)
            for (var i = 0; i < response.length && i < limit; i++) {
                if (response[i].name === 0){
                    $("#error-msg").show();
                } if (response[i].password === password) {
                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem("username", response[i].username);
                    // $("#success-msg").show();
                    // $("#error-msg").hide();
                } else {
                    $("#error-msg").show();
                }
            }
        });
    }
    });
});    