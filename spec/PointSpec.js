describe("A Point", function(){
    it("should be created with both an x and y coordinate", function(){
	var aPointConstructedWith = function(arguments) {
	    return function(){
		new MonaLisa.Points(arguments);
	    }
	}

	expect(aPointConstructedWith({})).toThrow();
	expect(aPointConstructedWith({ x : 0 })).toThrow();
	expect(aPointConstructedWith({ y : 0 })).toThrow();
    });
});