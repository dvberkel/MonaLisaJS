var is = function(actual){
    return {
	closeTo : function(expected, precision) {
	    if (!(precision === 0)) {
		precision = precision || 2;
	    }
	    var multiplier = Math.pow(10, precision);
	    actual = Math.round(actual * multiplier);
	    expected = Math.round(expected * multiplier);
	    return expected == actual;	    
	}
    };
};

beforeEach(function() {
    this.addMatchers({
	toHaveALengthCloseTo : function(expectedLength) {
	    var actualLength = this.actual.length();
	    return is(actualLength).closeTo(expectedLength);
	}
    });
});
