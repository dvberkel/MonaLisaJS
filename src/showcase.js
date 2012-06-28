(function($, MonaLisa){
    $(function(){
	var network = new MonaLisa.Network();
	network.addPoint(new MonaLisa.Point({ x: 1, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x: 0, y : 1 }));
	network.addPoint(new MonaLisa.Point({ x: -1, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x: 0, y : -1 }));

	new MonaLisa.NetworkView({
	    model : network,
	    elementId : "viewport",
	    width : 460,
	    height : 320,
	    transformX : function(x){ return 50 * x + 230 },
	    transformY : function(y){ return 50 * y + 160 }
	});
    });
})(jQuery, MonaLisa);