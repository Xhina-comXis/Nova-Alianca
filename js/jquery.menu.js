! function() {
	function e() {
		if (classie.has(t, "open")) {
			classie.remove(t, "open"), classie.add(t, "close");
			var e = function(n) {
				if (support.transitions) {
					if ("visibility" !== n.propertyName) return;
					this.removeEventListener(transEndEventName, e)
				}
				classie.remove(t, "close")
			};
			support.transitions ? t.addEventListener(transEndEventName, e) : e()
		} else classie.has(t, "close") || classie.add(t, "open")
	}
	var n = document.getElementById("trigger-overlay"),
		t = document.querySelector("div.overlay"),
		i = t.querySelector("button.overlay-close"),
		r = t.querySelector("nav ul li:nth-child(1) a"),
		s = t.querySelector("nav ul li:nth-child(2) a"),
		a = t.querySelector("nav ul li:nth-child(3) a"),
		o = t.querySelector("nav ul li:nth-child(4) a"),
		l = t.querySelector("nav ul li:nth-child(5) a");
	transEndEventNames = {
		WebkitTransition: "webkitTransitionEnd",
		MozTransition: "transitionend",
		OTransition: "oTransitionEnd",
		msTransition: "MSTransitionEnd",
		transition: "transitionend"
	}, transEndEventName = transEndEventNames[Modernizr.prefixed("transition")], support = {
		transitions: Modernizr.csstransitions
	}, n.addEventListener("click", e), i.addEventListener("click", e), r.addEventListener("click", e), s.addEventListener("click", e), a.addEventListener("click", e), o.addEventListener("click", e), l.addEventListener("click", e)
}();