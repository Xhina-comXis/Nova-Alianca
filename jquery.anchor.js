$(function() {
	$("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var t = $(this.hash);
			if ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
				scrollTop: t.offset().top
			}, 1e3), !1
		}
	})
});