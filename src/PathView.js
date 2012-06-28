(function(_, Backbone, MonaLisa, undefined){
    var PathView = Backbone.View.extend({
	startTemplate : _.template("M<%= x %>,<%= y %>"),
	lineTemplate : _.template("L<%= x %> <%= y %>"),

	initialize : function(){
	    this.render();
	},

	render : function(){
	    var view = this;
	    var tx = view.options.transformX;
	    var ty = view.options.transformY;
	    var points = this.model.get("points");
	    var pathDescription = view.startTemplate({ x : tx(points[0].x()), y : ty(points[0].y())});
	    for (var index = 1; index < points.length; index++){
		pathDescription += view.lineTemplate({ x : tx(points[index].x()), y : ty(points[index].y())});
	    }
	    pathDescription += "Z";
	    this.paper().path(pathDescription);
	},

	paper : function(){
	    return this.options.paper;
	}
    });

    MonaLisa.PathView = PathView;
})(_, Backbone, MonaLisa);