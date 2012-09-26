(function($,undefined){
    $(function(){
	$(".monalisa").monalisa({
	    'states' : ['default', 'mouth', 'road']
	});

	$("#venice").pointify({
	    "container-tag" : "section",
	    "offsetX" : -10,
	    "offsetY" : -34,
	    "background-position" : function(clickCount){
		if (clickCount > 10) {
		    clickCount = 10;
		}
		return "0px " + -clickCount * 34 + "px";
	    }
	});

	$("#toc").toc({
	    'selectors' : 'h2',
	    'container' : 'body',
	    'smoothScrolling': false,
	    'prefix': 'toc',
	    'highlightOnScroll': false
	}).decktoc();

	$("textarea.code").snippits({
	    onFinish : function(){$.deck(".slide");}
	});
    });
})(jQuery);
