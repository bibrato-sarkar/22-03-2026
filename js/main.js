$(".hamburger-button").on('click', function () {
    $(".menu-block").addClass("open");
    $("body").addClass("menu-section");
});

$(".close-button").on('click', function () {
    $(".menu-block").removeClass("open");
    $("body").removeClass("menu-section");
});