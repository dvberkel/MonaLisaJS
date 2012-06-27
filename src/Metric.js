(function(MonaLisa, undefined){
    MonaLisa.Metric = {};

    var squareRootOf = function(z) {
	return Math.sqrt(z);
    }
    
    var squareOf = function(z) {
	return z * z;
    };

    var absolute = function(z) {
	return Math.abs(z);
    };
    
    var differenceOf = function(a, b) {
	return a - b;
    };

    MonaLisa.Metric.euclidean = function(a, b){
	return squareRootOf(squareOf(differenceOf(a.x(), b.x())) + squareOf(differenceOf(a.y(), b.y())));
    };

    MonaLisa.Metric.manhatten = function(a, b){
	return (absolute(differenceOf(a.x(), b.x())) + absolute(differenceOf(a.y(), b.y())));
    };
})(MonaLisa);