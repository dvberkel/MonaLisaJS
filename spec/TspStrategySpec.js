describe("A TspStrategy", function(){
    describe("(brute force)", function(){
	it("should return the shortest possible route between all points", function(){
	    var strategy = MonaLisa.Strategy.BruteForce.withMetric(MonaLisa.Metric.euclidean);

	    var path = strategy.solveFor(MonaLisa.NetworkFactory.cycleNetworkOfSize(4));

	    expect(path).toHaveALengthCloseTo(4.0);;
	});
	
	it("should call a callback for each new candidate", function(){
	    var strategy = MonaLisa.Strategy.BruteForce.withMetric(MonaLisa.Metric.euclidean);
	    var candidates = [];

	    var path = strategy.solveFor(
		MonaLisa.NetworkFactory.cycleNetworkOfSize(3),
		function(candidate){ candidates.push(candidate); }
	    );

	    expect(candidates.length).toBeGreaterThan(0);
	});
    });

    describe("(greedy)", function(){
	it("should return a short route between all points", function(){
	    var strategy = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean);

	    var path = strategy.solveFor(MonaLisa.NetworkFactory.cycleNetworkOfSize(4));

	    expect(path).toHaveALengthCloseTo(4.0);;
	});

	it("should call a callback for each new candidate", function(){
	    var strategy = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean);
	    var candidates = [];

	    var path = strategy.solveFor(
		MonaLisa.NetworkFactory.cycleNetworkOfSize(3),
		function(candidate){ candidates.push(candidate); }
	    );

	    expect(candidates.length).toBeGreaterThan(0);
	});
    });

    describe("(random)", function(){
	it("should return a route between all points", function(){
	    var strategy = MonaLisa.Strategy.Random.withMetric(MonaLisa.Metric.euclidean);

	    var path = strategy.solveFor(MonaLisa.NetworkFactory.cycleNetworkOfSize(4));

	    expect(path).toBeDefined();;
	});

	it("should call a callback for each new candidate", function(){
	    var strategy = MonaLisa.Strategy.Random.withMetric(MonaLisa.Metric.euclidean);
	    var candidates = [];

	    var path = strategy.solveFor(
		MonaLisa.NetworkFactory.cycleNetworkOfSize(3),
		function(candidate){ candidates.push(candidate); }
	    );

	    expect(candidates.length).toBe(1);
	});
    });
});
