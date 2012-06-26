describe("A Network", function(){
    it("should start out with zero Points", function(){
	var network = new Network();

	expect(network.numberOfPoints()).toBe(0);
    });

    it("should be build up by adding Points", function(){
	var network = new Network();

	network.addPoint(new Point());
	network.addPoint(new Point());

	expect(network.numberOfPoints()).toBe(2);
    });
});