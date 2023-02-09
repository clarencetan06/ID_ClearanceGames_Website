$(document).ready(function() {
    $("#contact-form").submit(function(e) {
      e.preventDefault();

      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();

      if (name === "" || email === "" || message === "") {
        $("#message-alert").html("<strong>Error:</strong> All fields are required!").addClass("alert-danger").removeClass("alert-success").show();
      } else {
        $("#message-alert").html("<strong>Success:</strong> Message sent!").addClass("alert-success").removeClass("alert-danger").show();
        $("#contact-form")[0].reset();
      }
    });
  });

  $(document).ready(function() {
    $(".collapse").collapse({
      hide: true
    });
  });
