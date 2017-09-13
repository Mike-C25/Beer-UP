$(document).ready(function() {
    var Bar = {};

    var clientID;
    var clientSecret;

    $.ajax({
    	url: 'https://beer-up-api.herokuapp.com/untappd',
    	method: 'GET'
    }).done(function(res){
    	clientID = res.client_id;
    	clientSecret = res.client_secret;
    });

    console.log(clientID, clientSecret);

    // var clientID = keys.clientID;
    // var clientSecret = keys.clientSecret;

    // console.log(clientID, clientSecret);
    // var beerType = ""
    // var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + clientID + "&" + clientSecret;


    // console.log(clientID, clientSecret);
    var beerType = "Stout"
    var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + "limit=50&" + clientID + "&" + clientSecret;

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(result) {

        console.log(result);
        for (var i = 0; i < result.response.beers.count; i++) {
            var masterBeer = [];
            masterBeer.checkinCount.push(result.response.beers.items[i].checkin_count);
            masterBeer.beerName.push(result.response.beers.items[i].beer.beer_name);
            masterBeer.beerInfo.push(result.response.beers.items[i].beer.beer_description);
            masterBeer.beerID.push(result.response.beers.items[i].beer.bid);
            masterBeer.brewery.push(result.response.beers.items[i].brewery.brewery_name);
            Bar.push(masterBeer);
        }
        console.log(Bar);

    });
});