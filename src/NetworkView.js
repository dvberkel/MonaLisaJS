(function($, _, Backbone, Raphael, MonaLisa, undefined){
    
    var NetworkView = Backbone.View.extend({
	initialize : function(){
	    this.paper = Raphael(this.options.elementId, this.options.width, this.options.height);
	    this.paper.rect(0,0, this.options.width, this.options.height).attr("fill", "ivory");

	    this.render();
	},

	render : function() {
	    var view = this;
	    var tx = view.options.transformX;
	    var ty = view.options.transformY;
	    this.model.forEach(function(point){
		view.paper.circle(tx(point.x()), ty(point.y()), 5);
	    });
	}
    });

    MonaLisa.NetworkView = NetworkView;
})(jQuery, _, Backbone, Raphael, MonaLisa);