(function(_, Backbone, MonaLisa, undefined){
    var Point = Backbone.Model.extend({
	missing : _.template("A Point should have a parameter '<%= parameter %>'"),

	initialize : function(){
	    if (!this.isValid()) {
		throw "invalid object";
	    }
	},

	validate : function(attributes) {
	    var log = new MonaLisa.ErrorLog();
	    _.each([ 'x', 'y'], function(parameter){
		if (_.isUndefined(attributes[parameter])) {
		    log.add(this.isMissing({ parameter : parameter }));
		}
	    });
	    if (log.hasErrors()) {
		return log;
	    }
	},

	x : function() {
	    return this.get("x");
	},

	y : function() {
	    return this.get("y");
	}	
    });

    MonaLisa.Point = Point;
})(_, Backbone, MonaLisa);