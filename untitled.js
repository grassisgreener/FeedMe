// function for displaying gifs 
	function displaytopicGif()
	{
		$('#gifView').empty();
		var topic = $(this).attr('data-name');
		console.log(topic);
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url: queryURL, method: 'GET'})
		.done(function(response)
		{
			var topicDiv = $('<div class="topicImage">');
			console.log(response);
			for (i=0; i < response.data.length; i++)