var marker;

$(document).ready(function() {
   //Hide Map
    $(".map").hide();


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
    $(".results").fadeIn(1000);
    $(".map").toggleClass("trig")
    $(this).fadeOut();
});


//Go to Map Section
$(document).on("click", '.cards', function() {
    var iteration = $(this).attr("data-id")
    console.log(iteration)


    var latitude = Bar[iteration].location.lat;
    var longitude = Bar[iteration].location.lng;

    uluru = {
        lat: latitude,
        lng: longitude
    };
    // console.log(latitude);
    // console.log(longitude);
    initMap();
    $(".results").fadeOut();
    $(".map").fadeIn(1000);
    $(".backButt").fadeIn(1000);
    $(".map").toggleClass("trig");



});