(function($, Backbone, Raphael, MonaLisa, undefined){
    
    var NetworkView = Backbone.View.extend({
	initialize : function(){
	    this.paper = Raphael("viewport", 460, 320);
	    this.paper.rect(0,0, 460, 320).attr("fill", "ivory");

	    this.render();
	},

	render : function() {
	}
    });

    MonaLisa.NetworkView = NetworkView;
})(jQuery, Backbone, Raphael, MonaLisa);