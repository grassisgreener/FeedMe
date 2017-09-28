// Initialize Firebase
  // var config = {
    // apiKey: "AIzaSyDFI1oLnDztYVZgVprDz3aoeHElknqhMKw",
    // authDomain: "feed-me-593fb.firebaseapp.com",
    // databaseURL: "https://feed-me-593fb.firebaseio.com",
    // projectId: "feed-me-593fb",
    // storageBucket: "feed-me-593fb.appspot.com",
    // messagingSenderId: "42759236311"
  // };
  // firebase.initializeApp(config);


// function for button click and getting Zomato API 
$('#atkins-restaurant').on('click', function() {
    alert('button clicked');
    // API CODE WITH AJAX
    var topics = "restaurants"
    var queryURL = "https://developers.zomato.com/api/v2.1/categories";

    $.ajax({
    	url: queryURL,
    	method: 'GET',
    	headers: {
    	"user-key": "a373fcfb055ee56dffe8f90af3ca43dc",
    	}
    })
        .done(function(response) {
            console.log(response)
        });
});

    $('#gifView').empty();
        var topic = $(this).attr('data-name');
        console.log(topic);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response)
        {





  // (function() {
    // var cx = '002778761389979575343:s-wkhdbuhlm';
    // var gcse = document.createElement('script');
    // gcse.type = 'text/javascript';
    // gcse.async = true;
    // gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(gcse, s);
  // })();
  // <gsce:search></gsce:search>





