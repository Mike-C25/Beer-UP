var marker;

$(document).ready(function() {
   //Hide Map
    // $(".map").hide();



});


//Google Init Map function
function initMap() {
    google.maps.visualRefresh = true;
    console.log(uluru);
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 12
    });
    console.log("done");
    console.log(map);

    marker = new google.maps.Marker({
        position: uluru,
        map: map
    });


};



//Return to Results Section
$(document).on("click", '.backButt', function() {
	//Reset Google Maps
    google.maps.visualRefresh = true;
    google.maps.event.trigger(map, 'resize');
    marker.setMap(null);

    //Transition Out Map Elements

    $("#header-info").text("Click a Beer to see its original brewery location!").delay(100).fadeTo(500, 1);
    $(".map").toggleClass("trig");
    $(".results").fadeIn(1000);
    $(this).fadeOut();
});


//Go to Map Section
$(document).on("click", '.cards', function() {
    var iteration = $(this).attr("data-id")
    console.log(iteration)


    var latitude = Bar[iteration].location.lat;
    var longitude = Bar[iteration].location.lng;
    var city = Bar[iteration].location.brewery_city;
    var state = Bar[iteration].location.brewery_state;
    var locationText = "Location: " + city + ", " + state;

    uluru = {
        lat: latitude,
        lng: longitude
    };
    // console.log(latitude);
    // console.log(longitude);
    initMap(); 
    $("#header-info").text(locationText).delay(100).fadeTo(500, 1);
    $(".results").fadeOut();
    $(".map").toggleClass("trig");
    $(".backButt").fadeIn(1000).delay(1000);



});