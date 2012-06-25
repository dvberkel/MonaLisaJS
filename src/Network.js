(function(Backbone, undefined){
    var Network = Backbone.Collection.extend({
	numberOfPoints : function() {
	    return this.length;
	}
    });

    window.Network = Network;
})(Backbone);