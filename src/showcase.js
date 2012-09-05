(function($, Raphael, MonaLisa){
    $(function(){
	var paper = Raphael("viewport", 460, 320);
	paper.rect(0, 0, 460, 320).attr("fill", "ivory");

	var cycle = MonaLisa.NetworkFactory.cycleNetworkOfSize(10);
	var cycleTransformX = function(x){ return 40 * x + 115; };
	var cycleTransformY = function(y){ return 40 * y + 80; };

	new MonaLisa.NetworkView({
	    model : cycle,
	    paper : paper,
	    transformX : cycleTransformX,
	    transformY : cycleTransformY
	});

	var cyclePath = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean).solveFor(cycle);

	new MonaLisa.PathView({
	    model : cyclePath,
	    paper : paper,
	    transformX : cycleTransformX,
	    transformY : cycleTransformY
	});

 	var grid = MonaLisa.NetworkFactory.gridNetworkOfSize(8, 5);
	var gridTransformX = function(x){ return 30 * x + 230; };
	var gridTransformY = function(y){ return 30 * y + 160; };

	new MonaLisa.NetworkView({
	    model : grid,
	    paper : paper,
	    transformX : gridTransformX,
	    transformY : gridTransformY
	});

	var gridPath = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean).solveFor(grid);

	new MonaLisa.PathView({
	    model : gridPath,
	    paper : paper,
	    transformX : gridTransformX,
	    transformY : gridTransformY
	});
    });
})(jQuery, Raphael,  MonaLisa);