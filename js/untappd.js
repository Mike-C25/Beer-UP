
$(document).ready(function(){
	
	var masterBeer = {
	      checkinCount: [],
	      beerName:     [],
 	      beerInfo:     [],
 	      beerID:       [],
 	      brewery:      []
        };

// var keys = require('./key.js');
// var key = require('./key.js');
// console.log(keys);
// console.log("hi");
	var clientID = "client_id=884D240A42BC899E9117BEE3F75DD6E74B7BBB79";
	var clientSecret = "client_secret=8270A9AC633784F8A2CF46F7DC17F16CA162571A";

	console.log(clientID , clientSecret);
	var beerType  = "Stout"
	var queryURL  = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" +"limit=50&" + clientID + "&" + clientSecret; 
    
		console.log(queryURL);
	    $.ajax({
	      url: queryURL,
	      method: 'GET',
	    }).done(function(result) {

	      console.log(result);
	          for (var i = 0; i < result.response.beers.count; i ++) {
	          	masterBeer.checkinCount.push(result.response.beers.items[i].checkin_count);
	          	masterBeer.beerName.push(result.response.beers.items[i].beer.beer_name);
	            masterBeer.beerInfo.push(result.response.beers.items[i].beer.beer_description);
	            masterBeer.beerID.push(result.response.beers.items[i].beer.bid);
	            masterBeer.brewery.push(result.response.beers.items[i].brewery.brewery_name);
	          }
	          console.log(masterBeer);

	    });


});

              




