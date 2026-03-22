$(".hamburger-button").on('click', function () {
    $(".menu-block").show(300);
    $("body").addClass("menu-section");
});

$(".close-button").on('click', function () {
    $(".menu-block").hide(500);
    $("body").removeClass("menu-section");
});

$(".menu-section").on('click', function () {
    $(".menu-block").hide(500);
    $("body").removeClass("menu-section");
});