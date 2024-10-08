! function(e, t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, function(e) {
	"use strict";

	function t(e) {
		var t, o, i, r, n, s, a, d = {};
		for (a = 0, s = (n = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",")).length; a < s && (-1 === (o = n[a]).search(/^(http|https|ftp):\/\//) && -1 !== o.search(":")); a++) t = o.indexOf(":"), i = o.substring(0, t), (r = o.substring(t + 1)) || (r = void 0), "string" == typeof r && (r = "true" === r || "false" !== r && r), "string" == typeof r && (r = isNaN(r) ? r : +r), d[i] = r;
		return null == i && null == r ? e : d
	}

	function o(e) {
		var t, o, i, r = (e = "" + e).split(/\s+/),
			n = "50%",
			s = "50%";
		for (i = 0, t = r.length; i < t; i++) "left" === (o = r[i]) ? n = "0%" : "right" === o ? n = "100%" : "top" === o ? s = "0%" : "bottom" === o ? s = "100%" : "center" === o ? 0 === i ? n = "50%" : s = "50%" : 0 === i ? n = o : s = o;
		return {
			x: n,
			y: s
		}
	}

	function i(t, o) {
		var i = function() {
			o(this.src)
		};
		e('<img src="' + t + '.jpg">').on("load", i)
	}

	function r(o, i, r) {
		if (this.$element = e(o), "string" == typeof i && (i = t(i)), r ? "string" == typeof r && (r = t(r)) : r = {}, "string" == typeof i) i = i.replace(/\.\w*$/, "");
		else if ("object" == typeof i)
			for (var a in i) i.hasOwnProperty(a) && (i[a] = i[a].replace(/\.\w*$/, ""));
		this.settings = e.extend({}, n, r), this.path = i;
		try {
			this.init()
		} catch (e) {
			if (e.message !== s) throw e
		}
	}
	var n = {
			volume: 1,
			playbackRate: 1,
			muted: !0,
			loop: !0,
			autoplay: !0,
			position: "50% 50%",
			posterType: "detect",
			resizing: !0,
			bgColor: "transparent",
			className: ""
		},
		s = "Not implemented";
	r.prototype.init = function() {
		var t, r, n = this,
			a = n.path,
			d = a,
			p = "",
			c = n.$element,
			u = n.settings,
			v = o(u.position),
			l = u.posterType;
		r = n.$wrapper = e("<div>").addClass(u.className).css({
			position: "absolute",
			"z-index": -1,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			overflow: "hidden",
			"-webkit-background-size": "cover",
			"-moz-background-size": "cover",
			"-o-background-size": "cover",
			"background-size": "cover",
			"background-color": u.bgColor,
			"background-repeat": "no-repeat",
			"background-position": v.x + " " + v.y
		}), "object" == typeof a && (a.poster ? d = a.poster : a.mp4 ? d = a.mp4 : a.webm ? d = a.webm : a.ogv && (d = a.ogv)), "detect" === l ? i(d, function(e) {
			r.css("background-image", "url(" + e + ")")
		}) : "none" !== l && r.css("background-image", "url(" + d + "." + l + ")"), "static" === c.css("position") && c.css("position", "relative"), c.prepend(r), "object" == typeof a ? (a.mp4 && (p += '<source src="' + a.mp4 + '.mp4" type="video/mp4">'), a.webm && (p += '<source src="' + a.webm + '.webm" type="video/webm">'), a.ogv && (p += '<source src="' + a.ogv + '.ogv" type="video/ogg">'), t = n.$video = e("<video>" + p + "</video>")) : t = n.$video = e('<video><source src="' + a + '.mp4" type="video/mp4"><source src="' + a + '.webm" type="video/webm"><source src="' + a + '.ogv" type="video/ogg"></video>');
		try {
			t.prop({
				autoplay: u.autoplay,
				loop: u.loop,
				volume: u.volume,
				muted: u.muted,
				defaultMuted: u.muted,
				playbackRate: u.playbackRate,
				defaultPlaybackRate: u.playbackRate
			})
		} catch (e) {
			throw new Error(s)
		}
		t.css({
			margin: "auto",
			position: "absolute",
			"z-index": -1,
			top: v.y,
			left: v.x,
			"-webkit-transform": "translate(-" + v.x + ", -" + v.y + ")",
			"-ms-transform": "translate(-" + v.x + ", -" + v.y + ")",
			"-moz-transform": "translate(-" + v.x + ", -" + v.y + ")",
			transform: "translate(-" + v.x + ", -" + v.y + ")",
			visibility: "hidden",
			opacity: 0
		}).one("canplaythrough.vide", function() {
			n.resize()
		}).one("playing.vide", function() {
			t.css({
				visibility: "visible",
				opacity: 1
			}), r.css("background-image", "none")
		}), c.on("resize.vide", function() {
			u.resizing && n.resize()
		}), r.append(t)
	}, r.prototype.getVideoObject = function() {
		return this.$video[0]
	}, r.prototype.resize = function() {
		if (this.$video) {
			var e = this.$wrapper,
				t = this.$video,
				o = t[0],
				i = o.videoHeight,
				r = o.videoWidth,
				n = e.height(),
				s = e.width();
			s / r > n / i ? t.css({
				width: s + 2,
				height: "auto"
			}) : t.css({
				width: "auto",
				height: n + 2
			})
		}
	}, r.prototype.destroy = function() {
		delete e.vide.lookup[this.index], this.$video && this.$video.off("vide"), this.$element.off("vide").removeData("vide"), this.$wrapper.remove()
	}, e.vide = {
		lookup: []
	}, e.fn.vide = function(t, o) {
		var i;
		return this.each(function() {
			(i = e.data(this, "vide")) && i.destroy(), (i = new r(this, t, o)).index = e.vide.lookup.push(i) - 1, e.data(this, "vide", i)
		}), this
	}, e(document).ready(function() {
		var t = e(window);
		t.on("resize.vide", function() {
			for (var t, o = e.vide.lookup.length, i = 0; i < o; i++)(t = e.vide.lookup[i]) && t.settings.resizing && t.resize()
		}), t.on("unload.vide", function() {
			return !1
		}), e(document).find("[data-vide-bg]").each(function(t, o) {
			var i = e(o),
				r = i.data("vide-options"),
				n = i.data("vide-bg");
			i.vide(n, r)
		})
	})
});