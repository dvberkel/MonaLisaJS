describe("A Network", function(){
    var network;

    beforeEach(function(){
	network = new MonaLisa.Network();
    });

    it("should start out with zero Points", function(){
	expect(network).toHaveNPoints(0);
    });

    it("should be build up by adding Points", function(){
	network.addPoint(new MonaLisa.Point({ x : 0, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x : 1, y : 0 }));

	expect(network).toHaveNPoints(2);
    });
});