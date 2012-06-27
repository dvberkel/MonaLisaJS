describe("A TspStrategy", function(){
    describe("(brute force)", function(){
	it("should return the shortest possible route between all points", function(){
	    var strategy = MonaLisa.Strategy.BruteForce.withMetric(MonaLisa.Metric.euclidean);
	    var network = new MonaLisa.Network();
	    network.addPoint(new MonaLisa.Point({ x : 0, y : 0 }));
	    network.addPoint(new MonaLisa.Point({ x : 1, y : 0 }));
	    network.addPoint(new MonaLisa.Point({ x : 1, y : 1 }));
	    network.addPoint(new MonaLisa.Point({ x : 0, y : 1 }));

	    var path = strategy.solveFor(network);

	    expect(path.length()).toBeCloseTo(4.0);
	});
    });
});