// Business Logic



// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#numberInput").val();)
    if (userNumber > 3999) {
      alert("Please enter a number less than 4000.")
    } else {
// toss biz ^
    $("#result").text(userNumber);
    } 
  });
});
