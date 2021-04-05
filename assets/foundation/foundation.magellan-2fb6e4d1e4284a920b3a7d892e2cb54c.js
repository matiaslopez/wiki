!function(h,t){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.2",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(t,a,e){Foundation.inherit(this,"throttle"),this.bindings(a,e)},events:function(){var f=this,t=f.S,a=f.settings;f.set_expedition_position(),t(f.scope).off(".magellan").on("click.fndtn.magellan","["+f.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(t){var a=this.hostname===location.hostname||!this.hostname,e=f.filterPathname(location.pathname)===f.filterPathname(this.pathname),i=this.hash.replace(/(:|\.|\/)/g,"\\$1"),n=this;if(a&&e&&i){t.preventDefault();var o=h(this).closest("["+f.attr_name()+"]"),s=o.data("magellan-expedition-init"),l=this.hash.split("#").join(""),r=h('a[name="'+l+'"]');0===r.length&&(r=h("#"+l));var d=r.offset().top-s.destination_threshold+1;s.offset_by_height&&(d-=o.outerHeight()),h("html, body").stop().animate({scrollTop:d},s.duration,s.easing,function(){history.pushState?history.pushState(null,null,n.pathname+"#"+l):location.hash=n.pathname+"#"+l})}}).on("scroll.fndtn.magellan",f.throttle(this.check_for_arrivals.bind(this),a.throttle_delay))},check_for_arrivals:function(){var t=this;t.update_arrivals(),t.update_expedition_positions()},set_expedition_position:function(){var o=this;h("["+this.attr_name()+"=fixed]",o.scope).each(function(){var t,a,e=h(this),i=e.data("magellan-expedition-init"),n=e.attr("styles");e.attr("style",""),t=e.offset().top+i.threshold,a=parseInt(e.data("magellan-fixed-top")),isNaN(a)||(o.settings.fixed_top=a),e.data(o.data_attr("magellan-top-offset"),t),e.attr("style",n)})},update_expedition_positions:function(){var o=this,s=h(t).scrollTop();h("["+this.attr_name()+"=fixed]",o.scope).each(function(){var t=h(this),a=t.data("magellan-expedition-init"),e=t.attr("style"),i=t.data("magellan-top-offset");if(s+o.settings.fixed_top>=i){var n=t.prev("["+o.add_namespace("data-magellan-expedition-clone")+"]");0===n.length&&((n=t.clone()).removeAttr(o.attr_name()),n.attr(o.add_namespace("data-magellan-expedition-clone"),""),t.before(n)),t.css({position:"fixed",top:a.fixed_top}).addClass("fixed")}else t.prev("["+o.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",e).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var o=this,s=h(t).scrollTop();h("["+this.attr_name()+"]",o.scope).each(function(){var e=h(this),i=e.data(o.attr_name(!0)+"-init"),t=o.offsets(e,s),a=e.find("["+o.add_namespace("data-magellan-arrival")+"]"),n=!1;t.each(function(t,a){if(a.viewport_offset>=a.top_offset)return e.find("["+o.add_namespace("data-magellan-arrival")+"]").not(a.arrival).removeClass(i.active_class),a.arrival.addClass(i.active_class),n=!0}),n||a.removeClass(i.active_class)})},offsets:function(i,t){var n=this,o=i.data(n.attr_name(!0)+"-init"),s=t;return i.find("["+n.add_namespace("data-magellan-arrival")+"]").map(function(){var t=h(this).data(n.data_attr("magellan-arrival")),a=h("["+n.add_namespace("data-magellan-destination")+"="+t+"]");if(0<a.length){var e=a.offset().top-o.destination_threshold;return o.offset_by_height&&(e-=i.outerHeight()),e=Math.floor(e),{destination:a,arrival:h(this),top_offset:e,viewport_offset:s}}}).sort(function(t,a){return t.top_offset<a.top_offset?-1:t.top_offset>a.top_offset?1:0})},data_attr:function(t){return 0<this.namespace.length?this.namespace+"-"+t:t},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},filterPathname:function(t){return(t=t||"").replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var t=this;h("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document);