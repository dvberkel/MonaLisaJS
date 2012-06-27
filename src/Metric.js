(function(MonaLisa, undefined){
    MonaLisa.Metric = {};

    var squareRootOf = function(z) {
	return Math.sqrt(z);
    }
    
    var squareOf = function(z) {
	return z * z;
    };
    
    var differenceOf = function(a, b) {
	return a - b;
    };

    MonaLisa.Metric.euclidean = function(a, b){
	return squareRootOf(squareOf(differenceOf(a.x(), b.x())) + squareOf(differenceOf(a.y(), b.y())));
    };
})(MonaLisa);