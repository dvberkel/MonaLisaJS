describe("A Point", function(){
    it("should be created with both an x and y coordinate", function(){
	var noArguments = function(){
	    new MonaLisa.Point();
	};
	var xArguments = function(){
	    new MonaLisa.Point({ x : 0 });
	};
	var yArguments = function(){
	    new MonaLisa.Point({ y : 0 });
	};

	expect(noArguments).toThrow();
	expect(xArguments).toThrow();
	expect(yArguments).toThrow();
    });
});