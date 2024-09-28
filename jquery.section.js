jQuery(document).ready(function(e) {
	function n() {
		var n = e(window).height() / 5,
			a = e(window).scrollTop();
		i.each(function() {
			var t = e(this),
				i = t.attr("id"),
				r = o.filter('[href^="#' + i + '"]');
			t.offset().top - n < a && t.offset().top + t.height() - n > a ? r.addClass("active") : r.removeClass("active")
		}), t = !1
	}
	var t = !1,
		i = e(".cd-section"),
		o = e(".nav-menu, .dl-menuwrapper").find("a");
	e(window).on("scroll", function() {
		t || (t = !0, window.requestAnimationFrame ? window.requestAnimationFrame(n) : setTimeout(n, 300))
	})
});