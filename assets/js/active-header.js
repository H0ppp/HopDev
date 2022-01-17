
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#title").addClass("scrolled");
        $(".headerbar").addClass("scrolled");
    } else {
        $(".headerbar").removeClass("scrolled");
        $("#title").removeClass("scrolled");
    }
});