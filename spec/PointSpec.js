describe("A Point", function(){
    it("should be created with both an x and y coordinate", function(){
	var noArguments = function(){
	    new MonaLisa.Point();
	};

	expect(noArguments).toThrow();
    });
});