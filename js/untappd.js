var Bar = [];

$(document).ready(function() {

    var clientID;
    var clientSecret;
    var tempClient;
    var tempSecret;

    $.ajax({
        url: 'https://beer-up-api.herokuapp.com/untappd',
        method: 'GET'
    }).done(function(res) {
        // console.log(res);
        tempClient = res.client_id;
        tempSecret = res.secret_id;
    }).then(function() {
        clientID = "client_id=" + tempClient;
        clientSecret = "client_secret=" + tempSecret;

        var beerType = sessionStorage.getItem('beerChoice');
        if (beerType !== null) {
            console.log(beerType);
            var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + "limit=50&" + clientID + "&" + clientSecret;
            // console.log(queryURL);
            var bidArray = [];
            $.ajax({
                url: queryURL,
                method: 'GET'
            }).done(function(result) {
                console.log(result);
                for (var i = 0; i < result.response.beers.count; i++) {
                    var beerObj = {
                        checkInCount: result.response.beers.items[i].checkin_count,
                        beerName: result.response.beers.items[i].beer.beer_name,
                        beerDescription: result.response.beers.items[i].beer.beer_description,
                        beerID: result.response.beers.items[i].beer.bid,
                        beerRating: "",
                        beerABV: result.response.beers.items[i].beer.beer_abv,
                        beerIBU: result.response.beers.items[i].beer.beer_ibu,
                        beerStyle: result.response.beers.items[i].beer.beer_style,
                        breweryName: result.response.beers.items[i].brewery.brewery_name,
                        location: result.response.beers.items[i].brewery.location,

                    };
                    Bar.push(beerObj);
                }
                var resultsSection = $('.results');
                resultsSection.hide();

                console.log(Bar);
                for (beers in Bar) {
                    var checkIn = Bar[beers].checkInCount;
                    var beerDesc = Bar[beers].beerDescription;
                    var beerABV = Bar[beers].beerABV;
                    var beerIBU = Bar[beers].beerIBU;
                    var beerName = Bar[beers].beerName;
                    var breweryName = Bar[beers].beerStyle;


                    

                    var cardDiv = $("<div>");
                    var numberSpan = $("<span>");
                    var headerBlock = $("<h2>");
                    var descriptionBlock = $("<p>");
                    var statBlock = $("<div>");
                    var abvSection = $("<p>");
                    var ibuSection = $("<p>");
                    var rNumber = parseInt(beers);

                    cardDiv.addClass("cards");
                    cardDiv.attr("data-id", beers);
                    console.log(cardDiv);
                    numberSpan.addClass("rank-number").text(parseInt(rNumber + 1));
                    headerBlock.attr('id', 'results-beer-name').text(beerName);
                    descriptionBlock.text(beerDesc);
                    abvSection.text('ABV: ' + beerABV + '%').attr('class', 'abv');
                    ibuSection.text('IBU: ' + beerIBU).attr('class', 'ibu');
                    statBlock.addClass("stats").append(abvSection, ibuSection);


                    cardDiv.append(numberSpan, headerBlock, descriptionBlock, statBlock);

                    console.log(cardDiv[0]);
                    resultsSection.append(cardDiv[0]);
                    if (beers >= 9) {
                        break;
                    }

                }
                resultsSection.fadeIn(1000);
            });
        }
    });



    // var clientID = keys.clientID;
    // var clientSecret = keys.clientSecret;

    // console.log(clientID, clientSecret);
    // var beerType = ""
    // var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerType + "&" + clientID + "&" + clientSecret;



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