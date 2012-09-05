(function(_, undefined){
    var Combinatorics = {};

    var toOriginalArrayMapperFor = function(anArray) {
	return function(indices) {
	    return _.map(indices, function(index){ return anArray[index] });
	};
    };

    var nextPermutation = function(indices){
	var copy = indices.slice(0, indices.length);
	var result = undefined;
	if (copy.length == 2 && copy[0] === 0) {
	    result = copy;
	    result.reverse();
	}
	return result;
    };

    var allPermutationsOf = function(anArray, callback) {
	callback = callback || function(){};
	var indices = _.range(anArray.length);
	var toOriginalArray = toOriginalArrayMapperFor(anArray);
	
	do {
	    callback.call(undefined, toOriginalArray(indices));
	    indices = nextPermutation(indices);
	} while (indices)

	return 1;
	
    };

    Combinatorics.allPermutationsOf = allPermutationsOf;
    
    window.Combinatorics = Combinatorics;
})(_);