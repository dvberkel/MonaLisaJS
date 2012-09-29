var profile = (function($, _, undefined){
    var report = _.template("<%= result%> in <%= duration %>ms for <%= runs %> runs with <%= data %>");

    return function(method, options){
	var settings = $.extend({
	    "runs" : 10000
	}, options);
	return {
	    on : function(datas) {
		datas.forEach(function(data){
		    var start = (new Date).getTime();
		    var result;
		    for (var index = 0; index < settings["runs"]; index++) {
			result = method.apply(undefined, data);
		    }
		    var duration = (new Date).getTime() - start;
		    console.log(report($.extend({
			result : result,
			duration : duration,
			data : data
		    }, settings)));
		});
	    }
	};
    };
})(jQuery, _)
