$(document).ready(function() {
    var Bar = [];
    var clientID;
    var clientSecret;

    // $.ajax({
    // url: 'https://beer-up-api.herokuapp.com/untappd',
    // method: 'GET'
    // }).done(function(res){
    // 	console.log(res);
    // 	clientID = res.client_id;
    // 	clientSecret = res.client_secret;
    // });


    // var clientID = keys.clientID;
    // var clientSecret = keys.clientSecret;

    // console.log(clientID, clientSecret);
    // var beerType = ""
    // var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + clientID + "&" + clientSecret;
    clientID = "client_id=884D240A42BC899E9117BEE3F75DD6E74B7BBB79";
    clientSecret = "client_secret=8270A9AC633784F8A2CF46F7DC17F16CA162571A";


    // console.log(clientID, clientSecret);
    var beerType = localStorage.getItem('beerChoice');
    console.log(beerType);
    var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + "limit=50&" + clientID + "&" + clientSecret;
    var bidArray = [];
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(result) {

        for (var i = 0;  i <result.response.beers.count; i++) {
            var beerObj = {
                checkInCount: result.response.beers.items[i].checkin_count,
                beerName: result.response.beers.items[i].beer.beer_name,
                beerDescription: result.response.beers.items[i].beer.beer_description,
                beerID: result.response.beers.items[i].beer.bid,
                beerRating: "",
                breweryName: result.response.beers.items[i].brewery.brewery_name
            };
            Bar.push(beerObj);
        }


    });


    // var ratingUrl = "https://api.untappd.com/v4/beer/info/" + beerID + "?&compact=true&" + clientID + "&" + clientSecret;
    // $.ajax({
    //     url: ratingUrl,
    //     method: 'GET'
    // }).done(function(ratingRes) {
    //     var rating = ratingRes.response.beer.rating_score;


    //     Bar.push(beerObj);
    //     counter++;
    //     ratingLoop();
    // });

    // function beerQuery(res) {
    //     var counter = 0;
    //     var beerID = res[counter].beer.bid;
    //     ratingLoop();

    //     function ratingLoop() {
    //         beerID = res[counter].beer.bid;
    //         if (counter < res.length) {

    //             console.log(beerID);
                
    //             console.log(ratingUrl);

    //         }
    //         console.log(Bar);
    //     }
    // }
    // console.log(queryURL);



});