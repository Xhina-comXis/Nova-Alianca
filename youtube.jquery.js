! function(o) {
	o.fn.YouTubePopUp = function(e) {
		var a = o.extend({
			autoplay: 1
		}, e);
		o(this).on("click", function(e) {
			var u = o(this).attr("href");
			if (u.match(/(youtube.com)/)) var p = "v=",
				t = 1;
			if (u.match(/(youtu.be)/) || u.match(/(vimeo.com\/)+[0-9]/)) var p = "/",
				t = 3;
			if (u.match(/(vimeo.com\/)+[a-zA-Z]/)) var p = "/",
				t = 5;
			var i = u.split(p)[t].replace(/(&)+(.*)/, "");
			if (u.match(/(youtu.be)/) || u.match(/(youtube.com)/)) c = "https://www.youtube.com/embed/" + i + "?autoplay=" + a.autoplay;
			if (u.match(/(vimeo.com\/)+[0-9]/) || u.match(/(vimeo.com\/)+[a-zA-Z]/)) var c = "https://player.vimeo.com/video/" + i + "?autoplay=" + a.autoplay;
			o("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><div class="embed-container"><iframe src="' + c + '" allowfullscreen></iframe></div><span class="YouTubePopUp-Close"></span></div></div>'), o(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") && setTimeout(function() {
				o(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation")
			}, 600), o(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() {
				o(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() {
					o(this).remove()
				})
			}), e.preventDefault()
		}), o(document).keyup(function(e) {
			27 == e.keyCode && o(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click()
		})
	}
}(jQuery);