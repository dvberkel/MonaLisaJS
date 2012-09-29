var profile = (function($, undefined){
    return function(method, options){
	var settings = $.extend({
	    "runs" : 10000
	}, options);
	return {
	    on : function(data) {
		data.forEach(function(){
		    var start = (new Date).getTime();
		    var result;
		    for (var index = 0; index < settings["runs"]; index++) {
			result = method.apply(undefined, data);
		    }
		    var duration = (new Date).getTime() - start;
		    console.log(duration);
		});
	    }
	};
    };
})(jQuery)