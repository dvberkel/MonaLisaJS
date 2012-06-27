describe("A Metric", function(){
    describe("(Euclidean)", function(){
	it("should determine 'distance' between Points", function(){
	    var origin = new MonaLisa.Point({ x : 0, y : 0 });
	    var e1 = new MonaLisa.Point({ x : 1, y : 0 });
	    var e2 = new MonaLisa.Point({ x :  0, y : 1 });

	    var d = MonaLisa.Metric.euclidean;

	    expect(d(origin, origin)).toBeCloseTo(0.0);
	    expect(d(origin, e1)).toBeCloseTo(1.0);
	    expect(d(e1, e2)).toBeCloseTo(Math.sqrt(2));
	});
    });
});