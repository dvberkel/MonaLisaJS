(function(_, Backbone, MonaLisa, undefined){
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
	    return 4.0;
	}
    });
    
    MonaLisa.Path = Path;
})(_, Backbone, MonaLisa);