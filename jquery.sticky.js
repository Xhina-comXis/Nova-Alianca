$(window).scroll(function() {
	$(this).scrollTop() > 1 ? $("header").addClass("sticky") : $("header").removeClass("sticky")
});