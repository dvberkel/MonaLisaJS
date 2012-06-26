(function(Backbone, MonaLisa, undefined){
    var Network = Backbone.Collection.extend({
	addPoint : function(aPoint) {
	    this.add([aPoint]);
	},

	numberOfPoints : function() {
	    return this.length;
	}
    });

    MonaLisa.Network = Network;
})(Backbone, MonaLisa);