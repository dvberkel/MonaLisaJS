var cycleNetworkOfSize = function(n) {
    var alpha = 2 * Math.PI / n;
    var r = 1 / (2 * Math.sin(alpha / 2));
    var network = new MonaLisa.Network();
    for (var index = 0; index < n; index++) {
	network.addPoint(new MonaLisa.Point({ x : r * Math.cos(alpha * index), y : r * Math.sin(alpha * index) }));
    }
    return network;
}

describe("A TspStrategy", function(){
    describe("(brute force)", function(){
	it("should return the shortest possible route between all points", function(){
	    var strategy = MonaLisa.Strategy.BruteForce.withMetric(MonaLisa.Metric.euclidean);

	    var path = strategy.solveFor(MonaLisa.NetworkFactory.cycleNetworkOfSize(4));

	    expect(path).toHaveALengthCloseTo(4.0);;
	});
    });

    describe("(greedy)", function(){
	it("should return a short route between all points", function(){
	    var strategy = MonaLisa.Strategy.Greedy.withMetric(MonaLisa.Metric.euclidean);

	    var path = strategy.solveFor(MonaLisa.NetworkFactory.cycleNetworkOfSize(4));

	    expect(path).toHaveALengthCloseTo(4.0);;
	});
    });

    describe("(random)", function(){
	it("should return a route between all points", function(){
	    var strategy = MonaLisa.Strategy.Random.withMetric(MonaLisa.Metric.euclidean);

	    var path = strategy.solveFor(MonaLisa.NetworkFactory.cycleNetworkOfSize(4));

	    expect(path).toBeDefined();;
	});
    });
});