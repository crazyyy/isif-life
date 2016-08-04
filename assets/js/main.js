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
