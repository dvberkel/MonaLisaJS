describe("A Metric", function(){
    var origin;
    var e1;
    var e2;

    beforeEach(function(){
	origin = new MonaLisa.Point({ x : 0, y : 0 });
	e1 = new MonaLisa.Point({ x : 1, y : 0 });
	e2 = new MonaLisa.Point({ x :  0, y : 1 });
    });

    describe("(Euclidean)", function(){
	it("should determine 'distance' between Points", function(){
	    var d = MonaLisa.Metric.euclidean;

	    expect(d(origin, origin)).toBeCloseTo(0.0);
	    expect(d(origin, e1)).toBeCloseTo(1.0);
	    expect(d(e1, e2)).toBeCloseTo(Math.sqrt(2));
	});
    });

    describe("(Manhatten)", function(){
	it("should determine 'distance' between Points", function(){
	    var d = MonaLisa.Metric.manhatten;

	    expect(d(origin, origin)).toBeCloseTo(0.0);
	    expect(d(origin, e1)).toBeCloseTo(1.0);
	    expect(d(e1, e2)).toBeCloseTo(2);
	});
    });
});