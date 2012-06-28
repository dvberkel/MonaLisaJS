(function($, MonaLisa){
    $(function(){
	var network = new MonaLisa.Network();
	network.addPoint(new MonaLisa.Point({ x: 0, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x: 1, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x: 1, y : 1 }));
	network.addPoint(new MonaLisa.Point({ x: 0, y : 1 }));

	new MonaLisa.NetworkView({
	    model : network,
	    elementId : "viewport",
	    width : 460,
	    height : 320,
	});
    });
})(jQuery, MonaLisa);