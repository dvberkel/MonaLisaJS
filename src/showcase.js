(function($, Raphael, MonaLisa){
    $(function(){
	var paper = Raphael("viewport", 460, 320);
	paper.rect(0, 0, 460, 320).attr("fill", "ivory");

	var network = MonaLisa.NetworkFactory.cycleNetworkOfSize(10);

	new MonaLisa.NetworkView({
	    model : network,
	    paper : paper,
	    transformX : function(x){ return 50 * x + 230 },
	    transformY : function(y){ return 50 * y + 160 }
	});

	var path = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean).solveFor(network);

	new MonaLisa.PathView({
	    model : path,
	    paper : paper,
	    transformX : function(x){ return 50 * x + 230 },
	    transformY : function(y){ return 50 * y + 160 }
	});
    });
})(jQuery, Raphael,  MonaLisa);