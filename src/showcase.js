(function($, Raphael, MonaLisa){
    $(function(){
	var paper = Raphael("viewport", 460, 320);
	paper.rect(0, 0, 460, 320).attr("fill", "ivory");

	var network = new MonaLisa.Network();
	network.addPoint(new MonaLisa.Point({ x: 1, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x: 0, y : 1 }));
	network.addPoint(new MonaLisa.Point({ x: -1, y : 0 }));
	network.addPoint(new MonaLisa.Point({ x: 0, y : -1 }));

	new MonaLisa.NetworkView({
	    model : network,
	    paper : paper,
	    transformX : function(x){ return 50 * x + 230 },
	    transformY : function(y){ return 50 * y + 160 }
	});
    });
})(jQuery, Raphael,  MonaLisa);