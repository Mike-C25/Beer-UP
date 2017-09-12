
$(document).ready(function(){
	
// var keys = require('./key.js');
var key = require('./key.js');
console.log(keys);
	console.log("hi");
	var clientID = "client_id=" + keys.clientID;
	var clientSecret ="client_secret=" + keys.clientSecret;

	console.log(clientID , clientSecret);
	var beerType  = ""
	var queryURL  = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + clientID + "&" + clientSecret; 
});


              




