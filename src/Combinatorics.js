(function(_, undefined){
    var Combinatorics = {};

    var toOriginalArrayMapperFor = function(anArray) {
	return function(indices) {
	    return _.map(indices, function(index){ return anArray[index] });
	};
    };

    var lastStepUpIndexOf = function(indices){
	var index = indices.length - 2;
	while (index >= 0 && indices[index] > indices[index + 1]) { index--; }
	return index;
    };

    var from = function(originalIndex){	
	return {
	    swapIndexFor : function(indices) {
		var target = indices[originalIndex];
		var index = originalIndex;
		while (index < indices.length && target <= indices[index]) { index++; }
		return index - 1;
	    },
	    reverseTailFor : function(indices){
		var head = indices.slice(0, originalIndex + 1);
		var tail = indices.slice(originalIndex + 1);
		tail.reverse();
		return head.concat(tail);		
	    }
	};
    };
    
    var swap = function(i, j){
	return {
	    of : function(indices){
		var insert = indices.splice(j, 1, indices[i])[0];
		indices.splice(i, 1, insert);
	    }
	};
    };
    
    var nextPermutation = function(indices){
	var copy = indices.slice(0, indices.length);
	var result = undefined;
	var index = lastStepUpIndexOf(indices);
	if (index >= 0) {
	    var swapIndex = from(index).swapIndexFor(copy);
	    swap(index, swapIndex).of(copy);
	    result = from(index).reverseTailFor(copy);
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
