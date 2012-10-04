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

	var paper = Raphael("maximum", 460, 320);
	paper.rect(0, 0, 460, 320).attr("fill", "ivory");

	var maximum = MonaLisa.NetworkFactory.cycleNetworkOfSize(200);
	var maximumTransformX = function(x){ return 3 * x + 230; };
	var maximumTransformY = function(y){ return 3 * y + 160; };

	new MonaLisa.NetworkView({
	    model : maximum,
	    paper : paper,
	    transformX : maximumTransformX,
	    transformY : maximumTransformY,
	    radius : 2
	});

	// var maximumPath = MonaLisa.Strategy.BruteForce.withMetric(MonaLisa.Metric.euclidean).solveFor(maximum); // 8
	var maximumPath = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean).solveFor(maximum); // 1000

	new MonaLisa.PathView({
	    model : maximumPath,
	    paper : paper,
	    transformX : maximumTransformX,
	    transformY : maximumTransformY
	});

	var paper = Raphael("monalisa", 460, 320);
	paper.rect(0, 0, 460, 320).attr("fill", "ivory");
	
	var monalisa = monalisa_network;
	var monalisaTransformX = function(x){ return x/3 - 300; };
	var monalisaTransformY = function(y){ return y/3 + 0; };

	// new MonaLisa.NetworkView({
	//     model : monalisa,
	//     paper : paper,
	//     transformX : monalisaTransformX,
	//     transformY : monalisaTransformY,
	//     radius : 1/10
	// });

	var monalisaPath = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean).solveFor(monalisa);

	new MonaLisa.PathView({
	    model : monalisaPath,
	    paper : paper,
	    transformX : monalisaTransformX,
	    transformY : monalisaTransformY
	});
    });
})(jQuery, Raphael,  MonaLisa);
