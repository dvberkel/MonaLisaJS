(function(_, MonaLisa, undefined){
    MonaLisa.Strategy = {};

    var BruteForce = function(metric){
	this.solveFor = function(network){
	    var toVisit = network.toArray();
	    var currentBestPath = new MonaLisa.Path({ metric : metric, points : toVisit });
	    Combinatorics.allPermutationsOf(toVisit, function(candidate){
		var candidatePath = new MonaLisa.Path({ metric : metric, points : candidate });
		if (candidatePath.length() < currentBestPath.length()) {
		    currentBestPath = candidatePath;
		}
	    });
	    
	    return currentBestPath;
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

    var strategyWrapper = function(Strategy){
	return {
	    withMetric : function(metric){
		return new Strategy(metric);
	    }
	};
    }

    MonaLisa.Strategy.BruteForce = strategyWrapper(BruteForce);
    MonaLisa.Strategy.Greedy = strategyWrapper(Greedy);
    MonaLisa.Strategy.Random = strategyWrapper(Random);
})(_, MonaLisa);
