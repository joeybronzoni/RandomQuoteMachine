
// In order to make this API works on CodePen you need to append https://crossorigin.me to the URL.
// Example: $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"...
// See: https://deixapaso.wordpress.com/2015/11/03/wrapping-http-content-into-https-via-ajax-request-in-codepen/
//     permalinkembedparent



// A $( document ).ready() block.
$( document ).ready(function() {
  console.log("ready");

$.ajax({
  url: 'https://favqs.com/api/qotd',
  method: "GET",
  dataType:"json"
    }).done(function(response) {
      console.log(response.quote.id);
      $('#display').html("response")
    });


  
$('#addQouteFunny').on('click', function(e) {
  e.preventDefault();
$.ajax({
  url: 'https://favqs.com/api/qotd',
  method: "GET",
  dataType:"json"
    }).done(function(response) {
      console.log(response.qotd_date[qoute]);
      $('#display').html("response")
    });
});
  


});


















