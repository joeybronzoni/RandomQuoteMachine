
// In order to make this API works on CodePen you need to append https://crossorigin.me to the URL.
// Example: $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"...
// See: https://deixapaso.wordpress.com/2015/11/03/wrapping-http-content-into-https-via-ajax-request-in-codepen/
//     permalinkembedparent



// A $( document ).ready() block.
$( document ).ready(function() {
  console.log("ready");
  $('#addQoute').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://favqs.com/api/qotd',
      method: "GET",
      dataType:"json"
    }).done((res) => {
      console.log(res.quote);
      let results = res.quote;
      let me = $.parseHTML(results)
      $(".display").html("<div id='newDiv'>"+ "<h1>"+results.author+"</h1>"+"<h2>"+results.tags+"</h2>"+"<p>"+results.body+"</p>"+   "</div>");
    });
  });
});

// search local api for qoutes
$("#search-btn").on("click", function() {
      var searchedCharacter = $("#character-search").val().trim();

      searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

      $.get("/api/" + searchedCharacter, function(data) {
        console.log(data);
        if (data) {
          $("#stats").show();
          $("#name").text(data.name);
          $("#role").text(data.role);
          $("#age").text(data.age);
          $("#force-points").text(data.forcePoints);
        }
        else {
          $("#name").text("The force is not strong with this one. Your character was not found.");
          $("#stats").hide();
        }
      });
    });





//this is for adding a qoute to the local api
    $("#add_btn").on("click", function(event) {
      event.preventDefault();
      var newCharacter = {
        name: $("#name").val().trim(),
        role: $("#role").val().trim(),
        age: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
      };

      // Question: What does this code do??
      $.post("/api/new", newCharacter)
      .done(function(data) {
        console.log(data);
        alert("Adding character...");
      });
    });









