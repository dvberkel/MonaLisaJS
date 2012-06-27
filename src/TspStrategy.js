(function(_, MonaLisa, undefined){
    MonaLisa.Strategy = {};

    var BruteForce = function(metric){
	this.solveFor = function(network){
	    return {
		length : function(){ return 4.0; }
	    };
	};
    };
    
    var Greedy = function(metric){
	this.solveFor = function(network){
	    var toVisit = network.toArray();
	    var visited = [toVisit[0]]; toVisit = toVisit.slice(1);
	    
	    while (toVisit.length > 0) {
		var bestIndex = 0;
		var bestCandidate = toVisit[bestIndex];
		var bestMinimum = metric(_.last(visited), bestCandidate);
		_.each(toVisit, function(candidate, index){
		    var minimum = metric(_.last(visited), candidate);
		    if (minimum < bestMinimum) {
			bestIndex = index;
			bestCandidate = candidate;
			bestMinimum = minimum;
		    }
		});
		visited.push(bestCandidate);
		toVisit.splice(bestIndex, 1);
	    }
	    return new MonaLisa.Path({ metric : metric, points : visited });
	};
    };

    
    var Random = function(metric){
	this.solveFor = function(network){
	    var toVisit = network.toArray();
	    var visited = [toVisit[0]]; toVisit = toVisit.slice(1);
	    
	    while (toVisit.length > 0) {
		var anyIndex = 0;
		visited.push(toVisit[anyIndex]);
		toVisit.splice(anyIndex, 1);
	    }
	    return new MonaLisa.Path({ metric : metric, points : visited });
	};
    };

    MonaLisa.Strategy.BruteForce = {
	withMetric : function(metric){
	    return new BruteForce(metric);
	}
    };
    MonaLisa.Strategy.Greedy = {
	withMetric : function(metric){
	    return new Greedy(metric);
	}
    };
    MonaLisa.Strategy.Random = {
	withMetric : function(metric){
	    return new Greedy(metric);
	}
    };
})(_, MonaLisa);