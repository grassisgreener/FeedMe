$(function() {
        var params = {
            // Request parameters
            "q": "paleo foodORdiet",
            "count": "10",
            "offset": "0",
            "mkt": "en-us",
            "safeSearch": "Moderate",
            "imageType": "Photo"
        };
      
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
        })
        .fail(function() {
            alert("error");
        });
    });

