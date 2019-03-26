const gifs = ["yas-huny", "shade", "sips-tea", "grinny"]


var baseUrl = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=FgHTSToMRKrgH8Ho8Wnq9Op9lOhgvGc9&limit=5";
var queryUrl = baseUrl + apiKey;


$(document).ready(function () {

    $("#yas-huny").on("click", function () {
        // alert("this button was clicked")
        //console.log( baseUrl + "yas-huny" + apiKey);
        var yg = (baseUrl + "yas-huny" + apiKey);
        //console.log(yg);
        $.ajax({
            url: yg,
            method: "GET"
        }).then(function (response) {
            var results = (response.data);
            var placer = 0;
            //console.log(results)

            for (i = 0; i < results.length; i++) {
                //    console.log(results);

                //    var imgUrl = (response.data[i].images.fixed_height.url);
                //    console.log(imgUrl);

                $("#placer" + i).attr("src", response.data[i].images.fixed_height.url);
                //   $("#placer1").attr("src", response.data[1].images.fixed_height.url);
                //   $("#placer2").attr("src", response.data[2].images.fixed_height.url);
                //   $("#placer3").attr("src", response.data[3].images.fixed_height.url);
                //   $("#placer4").attr("src", response.data[4].images.fixed_height.url);
            }

        })


    })
    $("#shade").on("click", function () {
        var shade = (baseUrl + "shade" + apiKey);
        console.log(shade);
        
        $.ajax({
            url: shade,
            method: "GET"
        }).then(function (response) {
            var results = (response.data);
            var placer = 0;
            for (i = 0; i < results.length; i++) {

                $("#placer" + i).attr("src", response.data[i].images.fixed_height.url);

            }

        })


    })
    $("#sips-tea").on("click", function () {
        var sipsTea = (baseUrl + "sips-tea" + apiKey);
        console.log(shade);
        
        $.ajax({
            url: sipsTea,
            method: "GET"
        }).then(function (response) {
            var results = (response.data);
            var placer = 0;
            for (i = 0; i < results.length; i++) {

                $("#placer" + i).attr("src", response.data[i].images.fixed_height.url);

            }

        })


    })
    $("#grinning").on("click", function () {
        var grinning = (baseUrl + "#grinning" + apiKey);
        $.ajax({
            url: grinning,
            method: "GET"
        }).then(function (response) {
            var results = (response.data);
            var placer = 0;
            for (i = 0; i < results.length; i++) {

                $("#placer" + i).attr("src", response.data[i].images.fixed_height.url);

            }

        })


    })
 $("#add-button").on("click", function (event) {
    event.preventDefault();

   
   //alert("this button has been clicked"); 
    var gifCount = 0; 
    var inputs = $("#input-more").val().trim();
    console.log(inputs);
    
    var newGif = $("#add-button");

    inputs.attr("#input-more" + newGif);
    // inputs.attr("" +  gifCount);
    //   inputs.text(newGif);
    

    
    
    // // var added = $("#input-more").attr(inputs);
   
    // // console.log(added);
    
    
 })
 


});