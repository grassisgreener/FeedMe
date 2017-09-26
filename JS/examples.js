$("#atkins_button").on("click", function() {
    var params = {
    // Request parameters
    "q": "Atkin's food",
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
    "imageType": "Photo",
    "size": "Large"
    };

    $("#image_container").empty();

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
        },
        type: "GET",
        // Request body
        data: "{body}",
        })

        .done(function(data) {
            alert("success");
            console.log(data);

            var stuffFromBing = data.value;

          // Looping through each result item
          for (var i = 0; i < stuffFromBing.length; i++) {

            var image_div = $("<div>");

            var search_image = $("<img>");
            search_image.attr("src", data.value[i].contentUrl);
            
            image_div.append(search_image);

            $("#image_container").append(image_div);
            };
        });
});

$("#vegetarian_button").on("click", function() {
    var params = {
    // Request parameters
    "q": "vegetarian foodORdiet",
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
    "imageType": "Photo",
    "size": "Large"
    };

    $("#image_container").empty();

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
        },
        type: "GET",
        // Request body
        data: "{body}",
        })

        .done(function(data) {
            alert("success");
            console.log(data);

            var stuffFromBing = data.value;

          // Looping through each result item
          for (var i = 0; i < stuffFromBing.length; i++) {

            var image_div = $("<div>");

            var search_image = $("<img>");
            search_image.attr("src", data.value[i].contentUrl);
            
            image_div.append(search_image);

            $("#image_container").append(image_div);
            };
        });
});

$("#vegan_button").on("click", function() {
    var params = {
    // Request parameters
    "q": "vegan foodORdiet",
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
    "imageType": "Photo",
    "size": "Large"
    };

    $("#image_container").empty();

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
        },
        type: "GET",
        // Request body
        data: "{body}",
        })

        .done(function(data) {
            alert("success");
            console.log(data);

            var stuffFromBing = data.value;

          // Looping through each result item
          for (var i = 0; i < stuffFromBing.length; i++) {

            var image_div = $("<div>");

            var search_image = $("<img>");
            search_image.attr("src", data.value[i].contentUrl);
            
            image_div.append(search_image);

            $("#image_container").append(image_div);
            };
        });
});

$("#south_beach_button").on("click", function() {
    var params = {
    // Request parameters
    "q": "South Beach food",
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
    "imageType": "Photo",
    "size": "Large"
    };

    $("#image_container").empty();

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
        },
        type: "GET",
        // Request body
        data: "{body}",
        })

        .done(function(data) {
            alert("success");
            console.log(data);

            var stuffFromBing = data.value;

          // Looping through each result item
          for (var i = 0; i < stuffFromBing.length; i++) {

            var image_div = $("<div>");

            var search_image = $("<img>");
            search_image.attr("src", data.value[i].contentUrl);
            
            image_div.append(search_image);

            $("#image_container").append(image_div);
            };
        });
});

$("#mediterranean_button").on("click", function() {
    var params = {
    // Request parameters
    "q": "mediterranean foodORdiet",
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
    "imageType": "Photo"
    };

    $("#image_container").empty();

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
        },
        type: "GET",
        // Request body
        data: "{body}",
        })

        .done(function(data) {
            alert("success");
            console.log(data);

            var stuffFromBing = data.value;

          // Looping through each result item
          for (var i = 0; i < stuffFromBing.length; i++) {

            var image_div = $("<div>");

            var search_image = $("<img>");
            search_image.attr("src", data.value[i].contentUrl);
            
            image_div.append(search_image);

            $("#image_container").append(image_div);
            };
        });
});

$("#paleo_button").on("click", function() {
    var params = {
    // Request parameters
    "q": "paleo foodORdiet",
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
    "imageType": "Photo"
    };

    $("#image_container").empty();

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
        },
        type: "GET",
        // Request body
        data: "{body}",
        })

        .done(function(data) {
            alert("success");
            console.log(data);

            var stuffFromBing = data.value;

          // Looping through each result item
          for (var i = 0; i < stuffFromBing.length; i++) {

            var image_div = $("<div>");

            var search_image = $("<img>");
            search_image.attr("src", data.value[i].contentUrl);
            
            image_div.append(search_image);

            $("#image_container").append(image_div);
            };
        });
});