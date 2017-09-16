$(document).ready(function(){
    $(".card").on("click", function() {
        var selection = $(this).attr("data-name");
        sessionStorage.clear();
        sessionStorage.setItem("beerChoice",selection);
        document.location.href = ../typeResults.html;
    });
});