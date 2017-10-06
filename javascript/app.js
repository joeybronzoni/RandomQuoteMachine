// In order to make this API works on CodePen you need to append https://crossorigin.me to the URL.
// Example: $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"...
// See: https://deixapaso.wordpress.com/2015/11/03/wrapping-http-content-into-https-via-ajax-request-in-codepen/
//     permalinkembedparent



// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready");
    //get a random qoute from the quote of the day
    $('#getQuote').on('click', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'https://favqs.com/api/qotd',
            method: "GET",
            dataType: "json"
        }).done((res) => {
            console.log(res.quote);
            let results = res.quote;
            let me = $.parseHTML(results)
            $(".display").html("<div id='newDiv'>" + "<h1>" + results.author + "</h1>" + "<h2>" + results.tags + "</h2>" + "<p>" + results.body + "</p>" + "</div>");
        });
    });

    //------------------------------------------------------------------------------------/
    //------------------------------------------------------------------------------------/
    //this is for adding a qoute to the local api
    $("#addBtn").on("click", function(event) {
        event.preventDefault();
        var newQuote = {
            author: $("#author").val().trim(),
            tags: $("#tags").val().trim(),
            body: $("#body").val().trim(),
        };
        console.log("quotes here", newQuote);

        // Question: What does this code do??
        $.post("/api/new", newQuote)

            .done(function(data) {
                console.log(data);
                alert("Adding Quote...");
            });
    });

    $.ajax({
        type: 'POST',
        data: 'id=17446&chru=0',
        success: function() { ...
        },
        error: function() { ...
        },
        url: '/url/',
        cache: false
    });


    // search local api for qoutes
    $("#funnybtn").on("click", function() {
        //this was labeled #search-button
        var searchedquote = $("#character-search").val().trim();

        searchedcharacter = searchedcharacter.replace(/\s+/g, "").tolowercase();

        $.get("/api/" + searchedcharacter, function(data) {
            console.log(data);
            if (data) {
                $("#randomquote").show();
                $("#name").text(data.name);
                $("#role").text(data.role);
                $("#age").text(data.age);
                $("#force-points").text(data.forcepoints);
            } else {
                $("#name").text("the force is not strong with this one. your character was not found.");
                $("#stats").hide();
            }
        });
    });



});
