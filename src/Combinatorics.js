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
	var index = copy.length - 2;
	while (index >= 0 && copy[index] > copy[index + 1]) { index--; }
	if (index >= 0) {
	    var originalIndex = index;
	    var insert = copy.splice(index, 1)[0]
	    while (index < copy.length && insert < copy[index]) { index++; }
	    insert = copy.splice(index - 1, 1, insert)[0];
	    copy.splice(originalIndex, 0, insert);
	    var head = copy.slice(0, originalIndex + 1);
	    var tail = copy.slice(originalIndex + 1);
	    tail.reverse();
	    result = head.concat(tail);
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
