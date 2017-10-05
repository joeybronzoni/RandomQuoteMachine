
// In order to make this API works on CodePen you need to append https://crossorigin.me to the URL.
// Example: $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"...
// See: https://deixapaso.wordpress.com/2015/11/03/wrapping-http-content-into-https-via-ajax-request-in-codepen/
//     permalinkembedparent



// A $( document ).ready() block.
$( document ).ready(function() {
  console.log("ready");

// $.ajax({
//   url: 'https://favqs.com/api/qotd',
//   method: "GET",
//   dataType:"json"
//     }).done(function(response) {
//       console.log(response.quote);
//       let results = response.quote;
//       let me = $.parseHTML(results)
//       $(".display").html("<div id='newDiv'>"+ "<h1>"+results.author+"</h1>"+"<h2>"+results.tags+"</h2>"+"<p>"+results.body+"</p>"+   "</div>");
//       //$("#olDiv").html("<div id='olDiv'>"+results.tags+"</div>");
//        //$("#oDiv").html("<div id='oDiv'>"+results.body+"</div>");
//       console.log(results.author);
//       console.log(results.tags);
//       console.log(results.body);
//       console.log(me);
//     });
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

  
// $('#addQouteFunny').on('click', function(e) {
//   e.preventDefault();

// $.ajax({
//   url: 'https://favqs.com/api/qotd',
//   method: "GET",
//   dataType:"json"
//     }).done(function(response) {
//       console.log(response.quote);
//       let results = response.quote;
//       let me = $.parseHTML(results)
//       $(".display").html("<div id='newDiv'>"+ "<h1>"+results.author+"</h1>"+"<h2>"+results.tags+"</h2>"+"<p>"+results.body+"</p>"+   "</div>");
//       //$("#olDiv").html("<div id='olDiv'>"+results.tags+"</div>");
//        //$("#oDiv").html("<div id='oDiv'>"+results.body+"</div>");
//       console.log(results.author);
//       console.log(results.tags);
//       console.log(results.body);
//       console.log(me);
//     });


  


});


















