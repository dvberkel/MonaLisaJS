(function(_, Backbone, MonaLisa, undefined){
    var pathLength = function(d, points){
	var total = 0.0;
	for (var index = 0; index < points.length; index++) {
	    var nextIndex = ((index + 1) < points.length) ? index + 1 : 0;
	    total += d(points[index], points[nextIndex]);
	}
	return total;
    };

    var Path = Backbone.Model.extend({
	isMissing : _.template("A Path should have a parameter '<%= parameter %>'"),
	
	initialize : function(){
	    if (!this.isValid()) {
		throw "invalid object";
	    }
	},
	
	validate : function(attributes){
	    var log = new MonaLisa.ErrorLog();
	    _.each([ 'metric', 'points'], function(parameter){
		if (_.isUndefined(attributes[parameter])) {
		    log.add(this.isMissing({ parameter : parameter }));
		}
	    });
	    if (log.hasErrors()) {
		return log;
	    }
	},

	length : function() {
	    return pathLength(this.get("metric"), this.get("points"));
	}
    });
    
    MonaLisa.Path = Path;
})(_, Backbone, MonaLisa);