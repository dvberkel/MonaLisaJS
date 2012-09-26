(function($, undefined){
    var createHandler = function($element, settings){
	var $container = $element.parents(settings["container-tag"]);
	var clickCount = 0;
	return function(event){
	    var pointer = $("<div></div>");
	    pointer.addClass("pointer");
	    pointer.offset({ 
		left: event.pageX + settings.offsetX,
		top: event.pageY + settings.offsetY
	    });
	    pointer.css("background-position", settings["background-position"](clickCount++));
	    pointer.appendTo($container);
	}
    }

    $.fn.pointify = function(options){
	var settings = $.extend({
	    "container-tag" : "div",
	    "offsetX" : 0,
	    "offsetY" : 0,
	    "background-position" : function(clickCount){
		return "0px 0px";
	    }
	}, options);

	return this.each(function(){
	    var $this = $(this);
	    $this.click(createHandler($this, settings));
	});
    }
})(jQuery);