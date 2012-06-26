(function(Backbone, MonaLisa, undefined){
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
	initialize : function(){
	    if (!this.isValid()) {
		throw "invalid object";
	    }
	},

	validate : function(attributes) {
	    var log = new ErrorLog();
	    if (undefined === attributes.x) {
		log.add("A Point should have a parameter 'x'");
	    }
	    if (undefined === attributes.y) {
		log.add("A Point should have a parameter 'x'");
	    }
	    if (log.hasErrors()) {
		return log;
	    }
	}
    });

    MonaLisa.Point = Point;
})(Backbone, MonaLisa);