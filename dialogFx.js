! function(e) {
	"use strict";

	function t(e, t) {
		for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
		return e
	}

	function i(e, i) {
		this.el = e, this.options = t({}, this.options), t(this.options, i), this.ctrlClose = this.el.querySelector("[data-dialog-close]"), this.isOpen = !1, this._initEvents()
	}
	var n = Modernizr.cssanimations,
		o = {
			WebkitAnimation: "webkitAnimationEnd",
			OAnimation: "oAnimationEnd",
			msAnimation: "MSAnimationEnd",
			animation: "animationend"
		} [Modernizr.prefixed("animation")];
	i.prototype.options = {
		onOpenDialog: function() {
			return !1
		},
		onCloseDialog: function() {
			return !1
		}
	}, i.prototype._initEvents = function() {
		var e = this;
		this.ctrlClose.addEventListener("click", this.toggle.bind(this)), document.addEventListener("keydown", function(t) {
			27 === (t.keyCode || t.which) && e.isOpen && e.toggle()
		}), this.el.querySelector(".dialog__overlay").addEventListener("click", this.toggle.bind(this))
	}, i.prototype.toggle = function() {
		var e, t, i, d = this;
		this.isOpen ? (classie.remove(this.el, "dialog--open"), classie.add(d.el, "dialog--close"), e = this.el.querySelector(".dialog__content"), t = function() {
			classie.remove(d.el, "dialog--close")
		}, i = function(e) {
			if (n) {
				if (e.target != this) return;
				this.removeEventListener(o, i)
			}
			t && "function" == typeof t && t.call()
		}, n ? e.addEventListener(o, i) : i(), this.options.onCloseDialog(this)) : (classie.add(this.el, "dialog--open"), this.options.onOpenDialog(this)), this.isOpen = !this.isOpen
	}, e.DialogFx = i
}(window),
function() {
	var e = document.querySelector("[data-dialog]"),
		t = document.getElementById(e.getAttribute("data-dialog")),
		i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog2]"), t = document.getElementById(e.getAttribute("data-dialog2")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog3]"), t = document.getElementById(e.getAttribute("data-dialog3")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog4]"), t = document.getElementById(e.getAttribute("data-dialog4")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog5]"), t = document.getElementById(e.getAttribute("data-dialog5")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog6]"), t = document.getElementById(e.getAttribute("data-dialog6")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog7]"), t = document.getElementById(e.getAttribute("data-dialog7")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog8]"), t = document.getElementById(e.getAttribute("data-dialog8")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog9]"), t = document.getElementById(e.getAttribute("data-dialog9")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog10]"), t = document.getElementById(e.getAttribute("data-dialog10")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog11]"), t = document.getElementById(e.getAttribute("data-dialog11")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog12]"), t = document.getElementById(e.getAttribute("data-dialog12")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog13]"), t = document.getElementById(e.getAttribute("data-dialog13")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog14]"), t = document.getElementById(e.getAttribute("data-dialog14")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i));
	e = document.querySelector("[data-dialog15]"), t = document.getElementById(e.getAttribute("data-dialog15")), i = new DialogFx(t);
	e.addEventListener("click", i.toggle.bind(i))
}();