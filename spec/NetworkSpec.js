describe("A Network", function(){
    it("should be start out with zero Points", function(){
	var network = new Network();

	expect(network.numberOfPoints()).toBe(0);
    });
});