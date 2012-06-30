describe("A NetworkView", function(){
    beforeEach(function(){
	loadFixtures('viewport.html');
	this.paper = Raphael("viewport", 460, 320);
    });

    beforeEach(function(){
	var network = new MonaLisa.Network();
	network.addPoint(new MonaLisa.Point({ x : 1, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x : 0, y : 1 }));
	
	this.network = network;
    });

    it("should work on an existing paper", function(){
	expect($("svg")).toExist();
    });
    
    it("should add circles to the paper", function(){
	new MonaLisa.NetworkView({
	    model : this.network,
	    paper : this.paper,
	    transformX : function(x){return 50 * x + 230 },
	    transformY : function(y){return 50 * y + 160 }
	})

	expect($("circle")).toExist();
    });
});