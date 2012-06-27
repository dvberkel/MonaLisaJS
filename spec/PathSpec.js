describe("A Path", function(){
    it("should be created with a Metric and a list of Points", function(){
	var aPathConstructedWith = function(arguments){
	    return function(){
		new MonaLisa.Path(arguments);
	    };
	}
	
	expect(aPathConstructedWith({})).toThrow();
	expect(aPathConstructedWith({ metric : MonaLisa.Metric.euclidean })).toThrow();
	expect(aPathConstructedWith({ points : [ new MonaLisa.Point({ x : 0, y : 0 })] })).toThrow();
    });
});