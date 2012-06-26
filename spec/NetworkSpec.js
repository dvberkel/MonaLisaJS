describe("A Network", function(){
    it("should start out with zero Points", function(){
	var network = new MonaLisa.Network();

	expect(network.numberOfPoints()).toBe(0);
    });

    it("should be build up by adding Points", function(){
	var network = new MonaLisa.Network();

	network.addPoint(new MonaLisa.Point());
	network.addPoint(new MonaLisa.Point());

	expect(network.numberOfPoints()).toBe(2);
    });
});