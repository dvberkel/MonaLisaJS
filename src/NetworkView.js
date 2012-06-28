(function($, Backbone, Raphael, MonaLisa, undefined){
    
    var NetworkView = Backbone.View.extend({
	initialize : function(){
	    this.paper = Raphael(this.options.elementId, this.options.width, this.options.height);
	    this.paper.rect(0,0, this.options.width, this.options.height).attr("fill", "ivory");

	    this.render();
	},

	render : function() {
	}
    });

    MonaLisa.NetworkView = NetworkView;
})(jQuery, Backbone, Raphael, MonaLisa);