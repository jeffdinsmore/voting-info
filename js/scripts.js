$(document).ready(function() {
   $("#form").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#current-age").val());
  if (age >= 18) {
    $(".over18").show();
    $(".under18").hide();
  } else if (age < 18) {
    $(".under18").show();
    $(".over18").hide();
  }

  });
});