	var keys = {}
	requirejs(["./js/key.js"], function(key) {
	    console.log(key.clientID);
	    keys.clientID = key.clientID;
	    keys.clientSecret = key.clientSecret;
	});

	$(document).ready(function() {


	    console.log(keys);

	    var clientID = keys.clientID;
	    var clientSecret = keys.clientSecret;

	    console.log(clientID, clientSecret);
	    var beerType = ""
	    var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + clientID + "&" + clientSecret;
	});