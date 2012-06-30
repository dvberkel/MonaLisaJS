(function($, _, Backbone, Raphael, MonaLisa, undefined){
    
    var NetworkView = Backbone.View.extend({
	initialize : function(){
	    this.render();
	},

	render : function() {
	    var view = this;
	    var tx = view.options.transformX;
	    var ty = view.options.transformY;
	    this.model.forEach(function(point){
		var circle = view.paper().circle(tx(point.x()), ty(point.y()), 5);
	    });
	},

	paper : function(){
	    return this.options.paper;
	}
    });

    MonaLisa.NetworkView = NetworkView;
})(jQuery, _, Backbone, Raphael, MonaLisa);