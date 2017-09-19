var marker;
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



$(document).ready(function() {
    // console.log(Bar);
    $(".map").hide();


});

$(document).on("click", '.backButt', function() {
    google.maps.visualRefresh = true;
    google.maps.event.trigger(map, 'resize');
    marker.setMap(null);
    $(".results").fadeIn(1000);
    $(".map").fadeTo(.0001);
    $("#map").empty();
});



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






});