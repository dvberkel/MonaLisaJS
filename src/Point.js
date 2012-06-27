(function(_, Backbone, MonaLisa, undefined){
    var ErrorLog = function(){
	this._log = [];
	
	this.hasErrors = function() {
	    return this._log.length > 0;
	};
	
	this.add = function(errorMessage) {
	    this._log.push(errorMessage);
	};
    };

    var Point = Backbone.Model.extend({
	missing : _.template("A Point should have a parameter '<%= parameter %>'"),

	initialize : function(){
	    if (!this.isValid()) {
		throw "invalid object";
	    }
	},

	validate : function(attributes) {
	    var log = new ErrorLog();
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