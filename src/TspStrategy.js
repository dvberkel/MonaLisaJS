(function(MonaLisa, undefined){
    MonaLisa.Strategy = {};

    var BruteForce = function(metric){
	this.solveFor = function(network){
	    return {
		length : function(){ return 4.0; }
	    };
	};
    };

    MonaLisa.Strategy.BruteForce = {
	withMetric : function(metric){
	    return new BruteForce(metric);
	}
    };
})(MonaLisa);