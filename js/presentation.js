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
	  
	$("#non-crossing").non_crossing();

	var paper = Raphael("viewport", 420, 640);
	
	var monalisa = monalisa_network;
	var monalisaTransformX = function(x){ return 2*x/3 - 850; };
	var monalisaTransformY = function(y){ return 2*y/3 + 75; };

	var monalisaPath = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean).solveFor(monalisa);

	new MonaLisa.PathView({
	    model : monalisaPath,
	    paper : paper,
	    transformX : monalisaTransformX,
	    transformY : monalisaTransformY
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
