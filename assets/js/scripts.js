// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

/** main.js */
function load_scripts_and_css(e) {
  var a = {};
  jQuery.each(e.css, function(e, t) {
    a["ig_css_" + e] = 1
  }), jQuery.each(e.scripts, function(e, t) {
    a["ig_script_" + e] = 1
  });
  var t = function(t) {
    var r = t.target.id || "";
    "" != r && a.hasOwnProperty(r) && delete a[r], jQuery.isEmptyObject(a) && (jQuery(window).trigger("scripts_loaded.icegram"), jQuery(function() {
      window.icegram = new Icegram, window.icegram.init(e), jQuery("body").addClass("ig_" + icegram_pre_data.post_obj.device), icegram_timing.end = Date.now()
    }))
  };
  jQuery.each(e.css, function(e, a) {
    jQuery("<link>").attr("type", "text/css").attr("rel", "stylesheet").attr("id", "ig_css_" + e).attr("media", "all").appendTo("head").on("load", t).attr("href", a)
  });
  var r = e.scripts.shift();
  jQuery("<script>").attr("type", "text/javascript").attr("id", "ig_script_0").appendTo("body").on("load", function(a) {
    t(a), jQuery.each(e.scripts, function(e, a) {
      jQuery("<script>").attr("type", "text/javascript").attr("id", "ig_script_" + (e + 1)).appendTo("body").on("load", t).attr("src", a)
    })
  }).attr("src", r)
}
try {
  var icegram_data, icegram_timing = {};
  icegram_pre_data.post_obj.referral_url = window.location.href, icegram_timing.start = Date.now(), "yes" === icegram_pre_data.post_obj.cache_compatibility ? (jQuery.ajax({
    url: icegram_pre_data.ajax_url,
    type: "POST",
    async: !0,
    cache: !1,
    data: icegram_pre_data.post_obj,
    dataType: "json",
    success: function(e) {
      e ? (icegram_data = e, load_scripts_and_css(icegram_data)) : jQuery(".ig_inline_container:empty").remove()
    },
    error: function(e) {}
  }), jQuery(window).on("init.icegram", function(e, a) {
    a && jQuery.each(a.messages, function(e, a) {
      a.data.assets && (jQuery.each(a.data.assets.styles || [], function(e, a) {
        var t = jQuery("<div/>").html(a).find("link").attr("href");
        t && 0 == jQuery('link[href="' + t + '"]').length && jQuery("body").append(a)
      }), jQuery.each(a.data.assets.scripts || [], function(e, a) {
        var t = jQuery("<div/>").html("<script " + a).find("script").attr("src");
        t && 0 == jQuery('script[src="' + t + '"]').length && jQuery("body").append("<script " + a)
      }))
    })
  })) : "undefined" != typeof icegram_data && load_scripts_and_css(icegram_data), jQuery(window).on("init.icegram", function(e, a) {
    if (a && jQuery.each(a.messages, function(e, a) {
        "yes" == a.data.use_custom_code && "undefined" != typeof a.data.custom_js && jQuery("body").append(a.data.custom_js)
      }), jQuery("body").find(".trigger_onclick").length) {
      var t = "";
      jQuery.each(jQuery("body").find(".trigger_onclick"), function(e, r) {
        var i = jQuery(r).data("campaigns"),
          c = a.get_message_by_campaign_id(i);
        jQuery.each(c, function(e, a) {
          t += "icegram.get_message_by_id(" + a.data.id + ").show();"
        }), jQuery(r).children().length ? jQuery(r).children().attr("onclick", t) : jQuery(r).attr("onclick", t)
      })
    }
  })
} catch (e) {
  console.log(e)
}

/** // main.js */

/**Begin toparrow script */

function GoTo(link) {
  window.open(link.replace("_", "http://"));
}
// totop.js
$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() != "0") {
      $(this).fadeIn("slow")
    }
    var scrollDiv = $(this);
    $(window).scroll(function() {
      if ($(window).scrollTop() == "0") {
        $(scrollDiv).fadeOut("slow")
      } else {
        $(scrollDiv).fadeIn("slow")
      }
    });
    $(this).click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, "slow")
    })
  }
});
// totop.js

$(function() {
  $("#toTop").scrollToTop();
});
/*!
    SlickNav Responsive Mobile Menu v1.0.1
    (c) 2014 Josh Cope
    licensed under MIT
*/
;
(function(e, t, n) {
  function o(t, n) {
    this.element = t;
    this.settings = e.extend({}, r, n);
    this._defaults = r;
    this._name = i;
    this.init()
  }
  var r = {
      label: "MENU",
      duplicate: true,
      duration: 200,
      easingOpen: "swing",
      easingClose: "swing",
      closedSymbol: "&#9658;",
      openedSymbol: "&#9660;",
      prependTo: "body",
      parentTag: "a",
      closeOnClick: false,
      allowParentLinks: false,
      nestedParentLinks: true,
      showChildren: false,
      init: function() {},
      open: function() {},
      close: function() {}
    },
    i = "slicknav",
    s = "slicknav";
  o.prototype.init = function() {
    var n = this,
      r = e(this.element),
      i = this.settings,
      o, u;
    if (i.duplicate) {
      n.mobileNav = r.clone();
      n.mobileNav.removeAttr("id");
      n.mobileNav.find("*").each(function(t, n) {
        e(n).removeAttr("id")
      })
    } else {
      n.mobileNav = r
    }
    o = s + "_icon";
    if (i.label === "") {
      o += " " + s + "_no-text"
    }
    if (i.parentTag == "a") {
      i.parentTag = 'a href="#"'
    }
    n.mobileNav.attr("class", s + "_nav");
    u = e('<div class="' + s + '_menu"></div>');
    n.btn = e(["<" + i.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + i.label + "</span>", '<span class="' + o + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + i.parentTag + ">"].join(""));
    e(u).append(n.btn);
    e(i.prependTo).prepend(u);
    u.append(n.mobileNav);
    var a = n.mobileNav.find("li");
    e(a).each(function() {
      var t = e(this),
        r = {};
      r.children = t.children("ul").attr("role", "menu");
      t.data("menu", r);
      if (r.children.length > 0) {
        var o = t.contents(),
          u = false;
        nodes = [];
        e(o).each(function() {
          if (!e(this).is("ul")) {
            nodes.push(this)
          } else {
            return false
          }
          if (e(this).is("a")) {
            u = true
          }
        });
        var a = e("<" + i.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>');
        if (!i.allowParentLinks || i.nestedParentLinks || !u) {
          var f = e(nodes).wrapAll(a).parent();
          f.addClass(s + "_row")
        } else e(nodes).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent();
        t.addClass(s + "_collapsed");
        t.addClass(s + "_parent");
        var l = e('<span class="' + s + '_arrow">' + i.closedSymbol + "</span>");
        if (i.allowParentLinks && !i.nestedParentLinks && u) l = l.wrap(a).parent();
        e(nodes).last().after(l)
      } else if (t.children().length === 0) {
        t.addClass(s + "_txtnode")
      }
      t.children("a").attr("role", "menuitem").click(function(t) {
        if (i.closeOnClick && !e(t.target).parent().closest("li").hasClass(s + "_parent")) {
          e(n.btn).click()
        }
      });
      if (i.closeOnClick && i.allowParentLinks) {
        t.children("a").children("a").click(function(t) {
          e(n.btn).click()
        });
        t.find("." + s + "_parent-link a:not(." + s + "_item)").click(function(t) {
          e(n.btn).click()
        })
      }
    });
    e(a).each(function() {
      var t = e(this).data("menu");
      if (!i.showChildren) {
        n._visibilityToggle(t.children, null, false, null, true)
      }
    });
    n._visibilityToggle(n.mobileNav, null, false, "init", true);
    n.mobileNav.attr("role", "menu");
    e(t).mousedown(function() {
      n._outlines(false)
    });
    e(t).keyup(function() {
      n._outlines(true)
    });
    e(n.btn).click(function(e) {
      e.preventDefault();
      n._menuToggle()
    });
    n.mobileNav.on("click", "." + s + "_item", function(t) {
      t.preventDefault();
      n._itemClick(e(this))
    });
    e(n.btn).keydown(function(e) {
      var t = e || event;
      if (t.keyCode == 13) {
        e.preventDefault();
        n._menuToggle()
      }
    });
    n.mobileNav.on("keydown", "." + s + "_item", function(t) {
      var r = t || event;
      if (r.keyCode == 13) {
        t.preventDefault();
        n._itemClick(e(t.target))
      }
    });
    if (i.allowParentLinks && i.nestedParentLinks) {
      e("." + s + "_item a").click(function(e) {
        e.stopImmediatePropagation()
      })
    }
  };
  o.prototype._menuToggle = function(e) {
    var t = this;
    var n = t.btn;
    var r = t.mobileNav;
    if (n.hasClass(s + "_collapsed")) {
      n.removeClass(s + "_collapsed");
      n.addClass(s + "_open")
    } else {
      n.removeClass(s + "_open");
      n.addClass(s + "_collapsed")
    }
    n.addClass(s + "_animating");
    t._visibilityToggle(r, n.parent(), true, n)
  };
  o.prototype._itemClick = function(e) {
    var t = this;
    var n = t.settings;
    var r = e.data("menu");
    if (!r) {
      r = {};
      r.arrow = e.children("." + s + "_arrow");
      r.ul = e.next("ul");
      r.parent = e.parent();
      if (r.parent.hasClass(s + "_parent-link")) {
        r.parent = e.parent().parent();
        r.ul = e.parent().next("ul")
      }
      e.data("menu", r)
    }
    if (r.parent.hasClass(s + "_collapsed")) {
      r.arrow.html(n.openedSymbol);
      r.parent.removeClass(s + "_collapsed");
      r.parent.addClass(s + "_open");
      r.parent.addClass(s + "_animating");
      t._visibilityToggle(r.ul, r.parent, true, e)
    } else {
      r.arrow.html(n.closedSymbol);
      r.parent.addClass(s + "_collapsed");
      r.parent.removeClass(s + "_open");
      r.parent.addClass(s + "_animating");
      t._visibilityToggle(r.ul, r.parent, true, e)
    }
  };
  o.prototype._visibilityToggle = function(t, n, r, i, o) {
    var u = this;
    var a = u.settings;
    var f = u._getActionItems(t);
    var l = 0;
    if (r) {
      l = a.duration
    }
    if (t.hasClass(s + "_hidden")) {
      t.removeClass(s + "_hidden");
      t.slideDown(l, a.easingOpen, function() {
        e(i).removeClass(s + "_animating");
        e(n).removeClass(s + "_animating");
        if (!o) {
          a.open(i)
        }
      });
      t.attr("aria-hidden", "false");
      f.attr("tabindex", "0");
      u._setVisAttr(t, false)
    } else {
      t.addClass(s + "_hidden");
      t.slideUp(l, this.settings.easingClose, function() {
        t.attr("aria-hidden", "true");
        f.attr("tabindex", "-1");
        u._setVisAttr(t, true);
        t.hide();
        e(i).removeClass(s + "_animating");
        e(n).removeClass(s + "_animating");
        if (!o) {
          a.close(i)
        } else if (i == "init") {
          a.init()
        }
      })
    }
  };
  o.prototype._setVisAttr = function(t, n) {
    var r = this;
    var i = t.children("li").children("ul").not("." + s + "_hidden");
    if (!n) {
      i.each(function() {
        var t = e(this);
        t.attr("aria-hidden", "false");
        var i = r._getActionItems(t);
        i.attr("tabindex", "0");
        r._setVisAttr(t, n)
      })
    } else {
      i.each(function() {
        var t = e(this);
        t.attr("aria-hidden", "true");
        var i = r._getActionItems(t);
        i.attr("tabindex", "-1");
        r._setVisAttr(t, n)
      })
    }
  };
  o.prototype._getActionItems = function(e) {
    var t = e.data("menu");
    if (!t) {
      t = {};
      var n = e.children("li");
      var r = n.find("a");
      t.links = r.add(n.find("." + s + "_item"));
      e.data("menu", t)
    }
    return t.links
  };
  o.prototype._outlines = function(t) {
    if (!t) {
      e("." + s + "_item, ." + s + "_btn").css("outline", "none")
    } else {
      e("." + s + "_item, ." + s + "_btn").css("outline", "")
    }
  };
  o.prototype.toggle = function() {
    var e = this;
    e._menuToggle()
  };
  o.prototype.open = function() {
    var e = this;
    if (e.btn.hasClass(s + "_collapsed")) {
      e._menuToggle()
    }
  };
  o.prototype.close = function() {
    var e = this;
    if (e.btn.hasClass(s + "_open")) {
      e._menuToggle()
    }
  };
  e.fn[i] = function(t) {
    var n = arguments;
    if (t === undefined || typeof t === "object") {
      return this.each(function() {
        if (!e.data(this, "plugin_" + i)) {
          e.data(this, "plugin_" + i, new o(this, t))
        }
      })
    } else if (typeof t === "string" && t[0] !== "_" && t !== "init") {
      var r;
      this.each(function() {
        var s = e.data(this, "plugin_" + i);
        if (s instanceof o && typeof s[t] === "function") {
          r = s[t].apply(s, Array.prototype.slice.call(n, 1))
        }
      });
      return r !== undefined ? r : this
    }
  }
})(jQuery, document, window)

$(document).ready(function() {

  $.fn.exists = function() {
    return this.length > 0;
  }
  if ($('.main-nav').exists()) {
    $('.main-nav .menu').slicknav({
      label: '',
      prependTo: 'nav.main-nav'
    });
  }
  if ($('.fancybox').exists()) {
    $('.fancybox').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      padding: 10,
      helpers: {
        title: {
          type: 'inside'
        }
      }
    });
  }
  $(".item-holder").find("img").parent().addClass('image');
});

$(".closed").toggleClass("show");
$(".title").click(function() {
  $(this).parent().toggleClass("show").children("div.contents").slideToggle("medium");
  if ($(this).parent().hasClass("show")) {
    $(this).children(".title_h3").css("background", "#bbbbbb");
  } else {
    $(this).children(".title_h3").css("background", "#dddddd");
  }
});

var simplebox = (function() {
  var _1, _2, _3, _4, _5, _6, _7, _8, _9 = null,
    _a = false,
    _b, _c, _d, _e, _f, _10 = 1,
    _11 = 20,
    _12 = new Image,
    fx = {
      style: {}
    },
    _13, _14, _15, _16 = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
    _17 = /[^\.]\.(swf)\s*$/i,
    _18, _19 = [],
    _1a = {
      padding: 10,
      margin: 20,
      width: 560,
      height: 340,
      cyclic: false,
      overlayShow: true,
      hideOnOverlayClick: true,
      hideOnContentClick: false,
      swf: {
        wmode: "opaque"
      },
      h5video: {
        controls: "controls",
        preload: "metadata",
        autoplay: false
      },
      flashPlayer: "http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf",
      titlePosition: "inside",
      titleShow: true,
      titleFormat: null,
      transitionIn: "fade",
      transitionOut: "fade",
      speedIn: 500,
      speedOut: 500,
      changeSpeed: 500,
      changeFade: 500,
      scrolling: "auto",
      autoScale: true,
      autoDimension: true,
      enableCenter: true,
      enableMouseWheel: true,
      showCloseButton: true,
      showNavArrows: true,
      enableEscapeButton: true,
      overlayColor: "#666",
      overlayOpacity: "0.3",
      preloadIndent: 1
    };

  function _1b() {
    _5.style.display = "none";
    _12.onerror = _12.onload = null;
  };

  function _1c() {
    if (_a) {
      return;
    }
    _a = true;
    _1b();
    _a = false;
  };

  function _1d() {
    simplebox.start({
      content: "Sorry! the request cann't be reached"
    }, {
      transitionIn: "none",
      transitionOut: "none"
    });
  };

  function _1e() {
    var _1f = function() {
        _4.innerHTML = _2.innerHTML = "";
        Box.fadeOut(_1, "fast", function() {
          _a = false;
        });
      },
      t;
    if (_a) {
      return;
    }
    _a = true;
    _1b();
    Box.removeEvent(document, "keydown", _54);
    Box.removeEvent(window, "resize", _3e);
    _6.style.display = "none";
    _7.style.display = "none";
    _8.style.display = "none";
    _4.style.overflow = "hidden";
    if (_9) {
      _9.parentNode.removeChild(_9);
      _9 = null;
    }
    if (_e.transitionOut == "fade") {
      Box.fadeOut(_3, _1f);
    } else {
      if (_e.transitionOut == "elastic") {
        t = _14;
        _14 = _13;
        _13 = t;
        new Animate(fx, "fx", {
          from: 0,
          to: 1,
          step: _3a,
          time: _e.speedOut,
          callback: function() {
            _3.style.display = "none";
            _1f();
          }
        });
      } else {
        _3.style.display = "none";
        _1f();
      }
    }
  };

  function _20() {
    var d = document.createDocumentFragment(),
      t = Box.createElement("div", {
        "id": "simplebox"
      });
    d.appendChild(t);
    _2 = Box.createElement("div", {
      "id": "simple-tmp"
    });
    t.appendChild(_2);
    _5 = _2.cloneNode(false);
    _5.id = "simple-loading";
    _5.appendChild(document.createElement("div"));
    t.appendChild(_5);
    _1 = _2.cloneNode(false);
    _1.id = "simple-overlay";
    t.appendChild(_1);
    _3 = _2.cloneNode(false);
    _3.id = "simple-outer";
    t.appendChild(_3);
    _4 = _2.cloneNode(false);
    _4.id = "simple-inner";
    _3.appendChild(_4);
    _6 = Box.createElement("a", {
      "id": "simple-close"
    });
    _3.appendChild(_6);
    _7 = Box.createElement("a", {
      "id": "simple-left"
    });
    var _21 = Box.createElement("span", {
      "id": "simple-left-ico",
      "className": "simple-ico"
    });
    _7.appendChild(_21);
    _3.appendChild(_7);
    _8 = _7.cloneNode(true);
    _8.id = "simple-right";
    _8.querySelector("span").id = "simple-right-ico";
    _3.appendChild(_8);
    document.body.appendChild(d);
    Box.addEvent(_6, "click", _1e);
    Box.addEvent(_7, "click", _22);
    Box.addEvent(_8, "click", _23);
    Box.addEvent(_5, "click", _1c);
  };

  function _24() {
    if (_a) {
      return;
    }
    _a = true;
    _1b();
    _e = Box.extend({}, _d);
    var obj = _b[_c],
      _25, _26, _27 = _e.orig,
      t, arr;
    typeof _27 == "string" && (_27 = document.querySelector(_27));
    obj.getElementsByTagName && !_27 && (_e.orig = _27 = obj.getElementsByTagName("img")[0]);
    _e.title = obj.title || (_27 && (_27.title || _27.alt)) || "";
    _25 = _e.href || obj.href || null;
    if (_e.type) {
      _26 = _e.type;
      if (_26 == "html") {
        _25 = _e.content;
      }
    } else {
      if (_25) {
        if (_25.match(_16)) {
          _26 = "image";
        } else {
          if (_25.match(_17)) {
            _26 = "swf";
          }
        }
      }
      if (typeof _e.content !== "undefined") {
        _26 = "html";
        _25 = _e.content;
      } else {
        if ((t = _e.video) && (arr = t.split(";")) && arr.length > 0) {
          var _28 = {
              mp4: "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"",
              webm: "video/webm; codecs=\"vp8, vorbis\"",
              ogv: "video/ogg; codecs=\"theora, vorbis\"",
              ogg: "video/ogg; codecs=\"theora, vorbis\""
            },
            swf = [],
            _29, _2a = null;
          _26 = "h5video";
          _29 = document.createElement("video");
          document.body.appendChild(_29);
          arr.forEach(function(el, _2b, arr) {
            var _2c = el.slice(-3),
              _2d;
            if (_2c != "flv" && (t = _28[_2c])) {
              if (_2c == "mp4") {
                swf.push(el);
                if (!_29.play) {
                  swf.push(el);
                  return;
                }
              }
              _2d = _29.canPlayType(t);
              if ((_2d == "probably" || _2d == "maybe") && !_2a) {
                _2a = "<source src=\"" + el + "\" type='" + t + "'>";
              }
            } else {
              swf.push(el);
            }
          });
          swf.length > 0 && (_25 = swf[0]);
          _2a && (_25 = _2a);
        }
      }
    }
    if (!_25 || !_26) {
      _a = false;
      return;
    }
    _e.href = _25;
    _e.type = _26;
    var str = "",
      emb = "",
      key, _2e;
    switch (_26) {
      case "image":
        _a = false;
        _5a();
        _12 = new Image();
        _12.onload = function() {
          _12.onerror = null;
          _12.onload = null;
          _2f();
        };
        _12.onerror = _1d;
        _12.src = _25;
        break;
      case "h5video":
        if (_29.play && _2a) {
          str += "<video id=\"simple-video\" ";
          for (key in _e.h5video) {
            str += key + "=" + _e.h5video[key] + " ";
          }
          str += "width=\"" + _e.width + "\" height=\"" + _e.height + "\">";
          str += _2a;
          str += "</video>";
          _2.innerHTML = str;
          document.body.removeChild(_29);
          _30();
          break;
        }
        if (swf.length > 0) {
          document.body.removeChild(_29);
          _e.swf["flashvars"] = _31();
          _e.href = _e.flashPlayer;
        }
      case "swf":
        str += "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"" + _e.width + "\" height=\"" + _e.height + "\"><param name=\"movie\" value=\"" + _e.href + "\"></param>";
        for (key in _e.swf) {
          str += "<param name=\"" + key + "\" value='" + _e.swf[key] + "'></param>";
          emb += " " + key + "='" + _e.swf[key] + "'";
        }
        str += "<embed src=\"" + _e.href + "\" type=\"application/x-shockwave-flash\" width=\"" + _e.width + "\" height=\"" + _e.height + "\"" + emb + "></embed></object>";
        _2.innerHTML = str;
        _30();
        break;
      case "html":
        _2.innerHTML = _e.href;
        if (_e.autoDimension) {
          Box.extend(_2.style, {
            display: "block",
            position: "absolute"
          });
          _e.width = parseInt(Box.getComputedStyleValue(_2, "width"));
          _e.height = parseInt(Box.getComputedStyleValue(_2, "height"));
          Box.extend(_2.style, {
            display: "none",
            position: "auto"
          });
        }
        _30();
    }
  };

  function _31() {
    var _32 = {},
      t, p;
    p = _32["playlist"] = [];
    (t = _e["h5video"]["poster"]) && p.push(t);
    t = {};
    t.url = _e.href;
    t.autoPlay = _e.h5video.autoplay;
    t.autoBuffering = (_e.h5video.preload !== "none");
    p.push(t);
    return "config=" + JSON.stringify(_32);
  };

  function _2f() {
    _a = true;
    _2.innerHTML = "";
    _e.width = _12.width;
    _e.height = _12.height;
    _12.alt = _e.title;
    _12.id = "simple-img";
    _2.appendChild(_12);
    _30();
  };

  function _30() {
    var w, h, _33, _34 = _e.fadeSpeed;
    _5.style.display = "none";
    _33 = Box.extend({}, _14);
    _14 = _35();
    _36();
    w = _14.width - 2 * _e.padding;
    h = _14.height - 2 * _e.padding - _15;
    if (Box.getComputedStyleValue(_3, "display") != "none") {
      _6.style.display = "none";
      _7.style.display = "none";
      _8.style.display = "none";
      Box.fadeOut(_4, _34, function() {
        _4.style.overflow = "hidden";
        _4.innerHTML = _2.innerHTML;
        _13 = {
          width: parseInt(_4.style.width),
          height: parseInt(_4.style.height),
        };
        if (_13.width == w && _13.height == h) {
          Box.fadeIn(_4, _34, function() {
            Box.extendStyle(_3, _14);
            _39();
          });
        } else {
          function _37(_38) {
            Box.fadeIn(_4, _34, _39);
          };
          _13 = _33;
          new Animate(fx, "fx", {
            from: 0,
            to: 1,
            time: _e.changeSpeed,
            step: _3a,
            callback: _37
          });
        }
      });
      return;
    }
    _13 = _3b();
    _4.innerHTML = _2.innerHTML;
    if (_e.overlayShow) {
      _1.style.backgroundColor = _e.overlayColor;
      _1.style.opacity = _e.overlayOpacity;
      _1.style.display = "block";
    }
    if (_e.transitionIn == "elastic") {
      Box.extend(_4.style, {
        top: _e.padding + "px",
        left: _e.padding + "px",
        width: Math.max(_13.width - (_e.padding * 2), 1) + "px",
        height: Math.max(_13.height - (_e.padding * 2), 1) + "px"
      });
      Box.extendStyle(_3, _13);
      _3.style.opacity = 1;
      _3.style.display = "block";
      new Animate(fx, "fx", {
        from: 0,
        to: 1,
        step: _3a,
        time: _e.speedIn,
        callback: _39
      });
    } else {
      Box.extendStyle(_3, _14);
      Box.extend(_4.style, {
        top: _e.padding + "px",
        left: _e.padding + "px",
        width: Math.max(_14.width - (_e.padding * 2), 1) + "px",
        height: Math.max(_14.height - (_e.padding * 2) - _15, 1) + "px"
      });
      if (_e.transitionIn == "fade") {
        Box.fadeIn(_3, _34, _39);
      } else {
        _3.style.opacity = 1;
        _3.style.display = "block";
        _39();
      }
    }
  };

  function _39() {
    var _3c = _e.scrolling;
    _3c = _3c == "auto" ? (_e.type == "html" ? "auto" : "hidden") : (_3c == "yes" ? "auto" : "visible");
    _4.style.overflow = _3c;
    if (_9) {
      _9.style.display = "block";
    }
    if (_e.showCloseButton) {
      _6.style.display = "block";
    }
    if (_e.hideOnContentClick) {
      Box.removeEvent(_4, "click", _1e);
      Box.addEvent(_4, "click", _1e);
    }
    if (_e.hideOnOverlayClick && _e.overlayShow) {
      Box.removeEvent(_1, "click", _1e);
      Box.addEvent(_1, "click", _1e);
    }
    _b.length > 1 && _3d();
    if (_e.enableCenter) {
      Box.addEvent(window, "resize", _3e);
    }
    _a = false;
    _3f();
  };

  function _3a(_40) {
    var _41 = Math.round(_13.width + (_14.width - _13.width) * _40),
      _42 = Math.round(_13.height + (_14.height - _13.height) * _40),
      top = Math.round(_13.top + (_14.top - _13.top) * _40),
      _43 = Math.round(_13.left + (_14.left - _13.left) * _40);
    Box.extendStyle(_3, {
      width: _41,
      height: _42,
      left: _43,
      top: top
    });
    _41 = Math.max(_41 - _e.padding * 2, 0);
    _42 = Math.max(_42 - (_e.padding * 2 + (_15 * _40)), 0);
    _4.style.width = _41 + "px";
    _4.style.height = _42 + "px";
  };

  function _44() {
    var de = document.documentElement;
    return {
      "width": (window.innerWidth || (de && de.clientWidth) || document.body.clientWidth),
      "height": (window.innerHeight || (de && de.clientHeight) || document.body.clientHeight)
    };
  };

  function _45() {
    var win = _44();
    return [win.width, win.height, document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop];
  };

  function _46(elm) {
    var h, w, t = 0,
      l = 0;
    h = elm.offsetHeight;
    w = elm.offsetWidth;
    do {
      l += elm.offsetLeft;
      t += elm.offsetTop;
    } while (elm = elm.offsetParent);
    return {
      width: w,
      height: h,
      left: l,
      top: t
    };
  };

  function _3b() {
    var _47 = _e.orig,
      _48 = {},
      pos, _49, p = _e.padding;
    if (_47) {
      pos = _46(_47);
      _48 = {
        width: (pos.width + (p * 2)),
        height: (pos.height + (p * 2)),
        top: (pos.top - p),
        left: (pos.left - p)
      };
    } else {
      _49 = _45();
      _48 = {
        width: 1,
        height: 1,
        top: _49[3] + _49[1] * 0.5,
        left: _49[2] + _49[0] * 0.5
      };
    }
    return _48;
  };

  function _35() {
    var _4a = _45(),
      to = {},
      _4b = _e.margin,
      _4c = _e.autoScale,
      _4d = _e.padding * 2,
      _4e = (_e.margin + _11) * 2,
      _4f = (_e.margin + _11) * 2;
    if (_e.width.toString().indexOf("%") > -1) {
      to.width = ((_4a[0] * parseFloat(_e.width)) / 100) - (2 * _11);
      _4c = false;
    } else {
      to.width = _e.width + _4d;
    }
    if (_e.height.toString().indexOf("%") > -1) {
      to.height = ((_4a[1] * parseFloat(_e.height)) / 100) - (2 * _11);
      _4c = false;
    } else {
      to.height = _e.height + _4d;
    }
    if (_4c && (to.width > (_4a[0] - _4e) || to.height > (_4a[1] - _4f))) {
      if (_e.type == "image") {
        _4e += _4d;
        _4f += _4d;
        var _50 = Math.min(Math.min(_4a[0] - _4e, _e.width) / _e.width, Math.min(_4a[1] - _4f, _e.height) / _e.height);
        to.width = Math.round(_50 * (to.width - _4d)) + _4d;
        to.height = Math.round(_50 * (to.height - _4d)) + _4d;
      } else {
        to.width = Math.min(to.width, (_4a[0] - _4e));
        to.height = Math.min(to.height, (_4a[1] - _4f));
      }
    }
    to.left = _4a[2] + (_4a[0] - to.width) * 0.5;
    to.top = _4a[3] + (_4a[1] - to.height) * 0.5;
    if (_e.autoScale == false) {
      to.top = Math.max(_4a[3] + _4b, to.top);
      to.left = Math.max(_4a[2] + _4b, to.left);
    }
    return to;
  };

  function _36() {
    var t = _e.title,
      w, p = _e.padding;
    if (_9) {
      _9.parentNode.removeChild(_9);
      _9 = null;
    }
    _15 = 0;
    if (!_e.titleShow) {
      return;
    }
    if (!t) {
      return;
    }
    t = typeof(_e.titleFormat) === "function" ? _e.titleFormat(t, _b, _c, _e) : _51(t);
    w = Math.max(_14.width - 2 * p, 1);
    _9 = Box.createElement("div", {
      "id": "simple-title",
      "innerHTML": t,
      "className": "simple-title-" + _e.titlePosition
    });
    Box.extend(_9.style, {
      width: w + "px",
      paddingLeft: p + "px",
      paddingRight: p + "px"
    });
    document.body.appendChild(_9);
    switch (_e.titlePosition) {
      case "over":
        _9.style.bottom = p + "px";
        break;
      default:
        _15 = _9.offsetHeight - _e.padding;
        _14.height += _15;
        break;
    }
    _3.appendChild(_9);
    _9.style.display = "none";
  };

  function _51(_52) {
    var ret = false;
    if (_52 && _52.length) {
      switch (_e.titlePosition) {
        case "over":
          ret = "<span id=\"simple-title-over\">" + _52 + "</span>";
          break;
        default:
          ret = _52;
          break;
      }
    }
    return ret;
  };

  function _3d() {
    var _53 = navigator.userAgent.match(/firefox/i) ? "DOMMouseScroll" : "mousewheel";
    Box.addEvent(document, "keydown", _54);
    if (_e.enableMouseWheel) {
      Box.removeEvent(_3, _53, _55);
      Box.addEvent(_3, _53, _55);
    }
    if (!_e.showNavArrows) {
      return;
    }
    if ((_e.cyclic && _b.length > 1) || _c != 0) {
      _7.style.display = "block";
    }
    if ((_e.cyclic && _b.length > 1) || _c != (_b.length - 1)) {
      _8.style.display = "block";
    }
  };

  function _55(e) {
    var _56;
    e = e || window.event;
    _56 = e.wheelDelta ? (e.wheelDelta / 120) : (-e.detail / 3);
    _56 < 0 ? _23() : _22();
    e.preventDefault();
  };

  function _3e() {
    console.log(_45());
    _13 = _3b();
    _14 = _35();
    if (_9) {
      _9.style.width = _14.width - 2 * _e.padding + "px";
      if (_e.titlePosition == "inside") {
        _15 = _9.offsetHeight - _e.padding;
        _14.height += _15;
      }
    }
    Box.extendStyle(_3, _14);
    Box.extend(_4.style, {
      top: _e.padding + "px",
      left: _e.padding + "px",
      width: Math.max(_14.width - (_e.padding * 2), 1) + "px",
      height: Math.max(_14.height - (_e.padding * 2) - _15, 1) + "px"
    });
  };

  function _54(e) {
    var _57 = e || window.event;
    if (e.keyCode == 27 && _e.enableEscapeButton) {
      e.preventDefault();
      _1e();
    } else {
      if (e.keyCode == 37) {
        e.preventDefault();
        _22();
      } else {
        if (e.keyCode == 39) {
          e.preventDefault();
          _23();
        }
      }
    }
  };

  function _22() {
    return pos(_c - 1);
  };

  function _23() {
    return pos(_c + 1);
  };

  function pos(pos) {
    if (_a) {
      return;
    }
    if (pos > -1 && _b.length > pos) {
      _c = pos;
      _24();
    }
    if (_e.cyclic && _b.length > 1 && pos < 0) {
      _c = _b.length - 1;
      _24();
    }
    if (_e.cyclic && _b.length > 1 && pos >= _b.length) {
      _c = 0;
      _24();
    }
  };

  function _58() {
    if (_5.style.display != "block") {
      clearInterval(_f);
      return;
    }
    _5.childNodes[0].style.top = (_10 * -40) + "px";
    _10 = (_10 + 1) % 12;
  };

  function _3f() {
    var i, l, t = _b.length,
      img, _59;
    for (i = _c + 1, l = _c + _e.preloadIndent; i <= l; ++i) {
      if (i > t - 1) {
        break;
      }
      _59 = _b[i].href;
      if (typeof _59 !== "undefined" && !_19[i] && _59.match(_16)) {
        img = new Image();
        img.src = _b[i].href;
        _19[i] = img;
      }
    }
    for (i = l + 1; i < t - 1; ++i) {
      delete _19[i];
    }
    for (i = _c - 1, l = _c - _e.preloadIndent; i >= l; i--) {
      if (i < 0) {
        break;
      }
      _59 = _b[i].href;
      if (typeof _59 !== "undefined" && !_19[i] && _59.match(_16)) {
        img = new Image();
        img.src = _b[i].href;
        _19[i] = img;
      }
    }
    for (i = 0; i < l; ++i) {
      delete _19[i];
    }
  };

  function _5a() {
    clearInterval(_f);
    _5.style.display = "block";
    _f = setInterval(_58, 66);
  };
  return {
    init: _20,
    start: function(el, _5b, now) {
      var _5c, _5d;
      if (typeof el === "string") {
        _5c = document.querySelectorAll(el);
        _5c = Array.prototype.slice.call(_5c, 0);
      } else {
        _5c = !Array.isArray(el) && [el];
      }
      if (arguments.length == 2 && typeof arguments[1] == "boolean") {
        now = _5b;
        _5b = null;
      }
      if (_5c.length == 0) {
        return;
      }

      function go(_5e, _5f) {
        _b = _5f;
        _c = _5e;
        _d = Box.extend({}, _1a);
        var _60 = el.attributes,
          _61, t;
        if (_60) {
          for (var i = 0, l = _60.length; i < l; ++i) {
            _61 = _60[i].nodeName;
            if (_61.indexOf("data-") == 0) {
              _61 = _61.split("-");
              t = _61.pop();
              for (var j = 1, _62 = _61.length, _63 = _d; j < _62; ++j) {
                _63[_61[j]] && (_63 = _63[_61[j]]);
              }
              _63[t] = _60[i].nodeValue;
            }
          }
        }
        _5b && (Box.extend(_d, _5b));
        _d["width"] = parseInt(_d["width"]);
        _d["height"] = parseInt(_d["height"]);
        _24();
      };
      if (now) {
        el = _5c[0];
        go(0, _5c);
        return;
      }
      _5c.forEach(function(m, _64, arr) {
        Box.addEvent(m, "click", function(e) {
          el = m;
          e.preventDefault();
          go(_64, arr);
        });
      });
    }
  };
})();

if (typeof Box === "undefined") {
  Box = {};
}
Array.isArray = Array.isArray || function(o) {
  return Object.prototype.toString.call(o) === "[object Array]";
};
(function(K) {
  K.scripts = {};
  K.styles = {};
  K.getScripts = _1(_2, 1);
  K.getStyles = _1(_2, 0);

  function _2() {
    var _3, ss, _4 = null;
    _3 = Array.prototype.slice.call(arguments, 0);
    ss = _3.shift();
    for (var i = _3.length - 1; i > 0; --i) {
      if (Array.isArray(_3[i])) {
        _4 = _3.slice(i, i);
        delete _3[i];
        break;
      }
    }
    if (_4) {
      (function(_5) {
        var _6 = arguments.callee,
          t;
        if (t = _5.shift()) {
          _2(ss, t, function() {
            _6(_5);
          });
        } else {
          _7(_3, ss);
        }
      })(_4);
    } else {
      _7(_3, ss);
    }
  };

  function _7(_8, ss) {
    var t, s, _9, _a, _b, _c, _d;
    _9 = _8.shift();
    if ((t = _8[_8.length - 1]) && typeof t == "function") {
      _c = _8.pop();
    }
    if (t = _8.shift()) {
      _a = t;
    }
    if (t = _8.shift()) {
      _b = t;
    }
    if (_a) {
      K.scripts[_9] = _a;
    } else {
      _a = K.scripts[_9];
      if (!_a) {
        return;
      }
    }
    if (ss) {
      s = document.createElement("script");
      s.setAttribute("type", "text/javascript");
      _c && (s.onload = _c);
    } else {
      s = document.createElement("link");
      s.setAttribute("rel", "stylesheet");
    }
    document.getElementsByTagName("head")[0].appendChild(s);
    t = _b ? _a + _b : _a;
    ss ? (s.src = t) : (s.href = t);
  };
  K.addEvent = (function() {
    if (document.addEventListener) {
      return function(_e, _f, fn) {
        _e.addEventListener(_f, fn, false);
      };
    } else {
      if (document.attachEvent) {
        return function(obj, _10, fn) {
          obj.attachEvent("on" + _10, fn);
        };
      }
    }
  })();
  K.removeEvent = (function() {
    if (document.removeEventListener) {
      return function(obj, _11, fn) {
        obj.removeEventListener(_11, fn, false);
      };
    } else {
      if (document.detachEvent) {
        return function(obj, _12, fn) {
          obj.detachEvent("on" + _12, fn);
        };
      }
    }
  })();
  K.$ = function(obj) {
    return document.getElementById(obj);
  };

  function _13(obj) {
    return obj instanceof Object;
  };
  K.extend = function() {
    var i, _14 = true,
      _15, _16, _17;
    _16 = Array.prototype.slice.call(arguments, 0);
    typeof _16[0] === "boolean" && (_14 = _16.shift());
    _15 = _16.shift();

    function _18(_19, _1a) {
      if (!_1a || !_19) {
        return;
      }
      for (i in _1a) {
        if (i in _19) {
          if (_14 && _13(_19[i]) && _13(_1a[i])) {
            _18(_19[i], _1a[i]);
          } else {
            _19[i] = _1a[i];
          }
        } else {
          if (typeof _1a[i] !== "undefined") {
            _19[i] = _1a[i];
          }
        }
      }
    };
    while (_17 = _16.shift()) {
      _18(_15, _17);
    }
    return _15;
  };
  K.contentLoad = function(fn) {
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", fn, false);
    } else {
      if (/MSIE/i.test(navigator.userAgent)) {
        document.write("<script id='__ie_onload' defer src='javascript:void(0);'></script>");
        var _1b = document.getElementById("__ie_onload");
        _1b.onreadystatechange = function() {
          if (this.readyState == "complete") {
            fn();
          }
        };
      } else {
        if (/WebKit/i.test(navigator.userAgent)) {
          var _1c = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
              clearInterval(_1c);
              fn();
            }
          }, 10);
        } else {
          window.onload = function(e) {
            fn();
          };
        }
      }
    }
  };
  K.createElement = function(tag, _1d) {
    var t = document.createElement(tag),
      ret;
    ret = _1d ? K.extend(t, _1d) : t;
    return ret;
  };
  K.getComputedStyleValue = function(_1e, _1f) {
    return window.getComputedStyle(_1e, null).getPropertyValue(_1f);
  };
  K.extendStyle = function(el, _20) {
    var i, _21 = {};
    for (i in _20) {
      _21[i] = _20[i] + "px";
    }
    K.extend(el.style, _21);
  };
  K.fadeOut = _1(_22, 0);
  K.fadeIn = _1(_22, 1);

  function _22(io, el, _23, _24) {
    var _25 = Array.prototype.slice.call(arguments, 0),
      _26, t, cb;
    if (_25.length == 3 && typeof _25[2] == "function") {
      _24 = _25[2];
      _23 = null;
    }
    cb = function() {
      _24 && _24();
    };
    if (io) {
      if (K.getComputedStyleValue(el, "display") != "none") {
        cb();
        return;
      }
      el.style.opacity = 0;
      el.style.display = el.getAttribute("data-display") || "block";
      new Animate(el, "opacity", {
        to: 1,
        time: _23,
        callback: function() {
          _24();
        }
      });
    } else {
      if ((t = K.getComputedStyleValue(el, "display")) == "none") {
        cb();
        return;
      }
      el.setAttribute("data-display", t);
      new Animate(el, "opacity", {
        to: 0,
        time: _23,
        callback: function() {
          el.style.display = "none";
          cb();
        }
      });
    }
  };

  function _1() {
    var _27 = Array.prototype.slice.call(arguments, 0),
      fn = _27.shift();
    return function() {
      var io = Array.prototype.slice.call(arguments, 0);
      io = _27.concat(io);
      return fn.apply(null, io);
    };
  };
})(Box);

function Animate(elm, _28, _29) {
  this.elm = elm;
  this.prop = _28;
  this.to = parseInt(_29.to);
  this.from = typeof _29.from != "undefined" ? _29.from : Box.getComputedStyleValue(elm, _28);
  this.from = parseInt(this.from);
  this.callback = _29.callback;
  this.diff = this.to - this.from;
  this.time = parseInt(_29.time) || Animate.timeShorts[_29.time] || 400;
  this.step = _29.step;
  this.start();
};
Animate.timeShorts = {
  slow: 600,
  fast: 200
};
Animate.prototype = {
  start: function() {
    var _2a = this;
    this.startTime = new Date();
    this.timer = setInterval(function() {
      _2a._animate.call(_2a);
    }, 4);
    return this;
  },
  _animate: function() {
    var _2b = new Date() - this.startTime,
      val, _2c;
    if (_2b >= this.time) {
      this._setStyle(this.to);
      typeof this.step == "function" && this.step(1);
      clearInterval(this.timer);
      typeof this.callback == "function" && this.callback();
      return;
    }
    _2c = Math.floor((_2b / this.time) * 100) / 100;
    val = this.diff * _2c + this.from;
    this._setStyle(val);
    typeof this.step == "function" && this.step(_2c);
  },
  _setStyle: function(val) {
    var _2d = this.elm.style;
    switch (this.prop) {
      case "opacity":
        _2d[this.prop] = val;
        break;
      default:
        _2d[this.prop] = val + "px";
        break;
    }
  }
};
