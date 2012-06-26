describe("A Network", function(){
    it("should start out with zero Points", function(){
	var network = new MonaLisa.Network();

	expect(network.numberOfPoints()).toBe(0);
    });

    it("should be build up by adding Points", function(){
	var network = new MonaLisa.Network();

	network.addPoint(new MonaLisa.Point({ x : 0, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x : 1, y : 0 }));

	expect(network.numberOfPoints()).toBe(2);
    });
});