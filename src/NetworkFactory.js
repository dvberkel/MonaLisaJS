(function(MonaLisa, undefined){
    var factory = {
	cycleNetworkOfSize : function(n){
	    var alpha = 2 * Math.PI / n;
	    var r = 1 / (2 * Math.sin(alpha / 2));
	    var network = new MonaLisa.Network();
	    for (var index = 0; index < n; index++) {
		network.addPoint(new MonaLisa.Point({ x : r * Math.cos(alpha * index), y : r * Math.sin(alpha * index) }));
	    }
	    return network;
	},
	gridNetworkOfSize : function(width, height){
	    var network = new MonaLisa.Network();
	    for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
		    network.addPoint(new MonaLisa.Point({ x : x, y : y}));
		}
	    }
	    return network;
	}
    };

    MonaLisa.NetworkFactory = factory;
})(MonaLisa);