(function(Backbone, undefined){
    var Network = Backbone.Collection.extend({
	addPoint : function(aPoint) {
	    this.add([aPoint]);
	},

	numberOfPoints : function() {
	    return this.length;
	}
    });

    window.Network = Network;
})(Backbone);