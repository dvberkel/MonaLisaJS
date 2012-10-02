(function($, Raphael, undefined){
    var point = function(paper, settings, max_x, max_y, min_x, min_y) {
	min_x = min_x != null ? min_x : 0;
	min_y = min_y != null ? min_y : 0;
	var x = Math.random() * (max_x - min_x) + min_x;
	var y = Math.random() * (max_y - min_y) + min_y;
	var result = paper.circle(x, y, settings.radius);
	result.attr({"stroke-width" : 3, "fill" : "black"});
	return result;
    }
    
    var coordinate = function(point) {
	return "" + point[0] + "," + point[1];
    }
    
    var path = function(paper, points, attributes) {
	attributes = $.extend({stroke: "black", "stroke-width": 3}, attributes);
	var description = "M" + coordinate(points[0]);
	for (var index = 1; index < points.length; index++) {
	    description += "L" + coordinate(points[index]);
	}
	var result = paper.path(description);
	result.attr(attributes);
	return result;
    }

    var crossing = function(element, settings){
	var width = settings.width;
	var height = settings.height;
	var offset = settings.offset;
	var paper = Raphael(element, width, height);
	var ul = point(paper, settings, width/3 - offset, height/3 - offset, offset, offset);
	var ur = point(paper, settings, width - offset, height/3 - offset, 2*width/3 + offset, offset);
	var ll = point(paper, settings, width/3 - offset, height - offset, offset, 2*height/3 + offset);
	var lr = point(paper, settings, width - offset, height - offset, 2*width/3 + offset, 2*height/3 + offset);
	var down_path = path(paper, [[0,0], [ul.attrs.cx, ul.attrs.cy], [lr.attrs.cx, lr.attrs.cy], [width, height]]);
	var up_path = path(paper, [[0, height], [ll.attrs.cx, ll.attrs.cy], [ur.attrs.cx, ur.attrs.cy], [width, 0]]);
	return [ul, ur, ll, lr];
    };

    var short_cut = function(points) {
	var ul = points[0];
	var ur = points[1];
	var ll = points[2];
	var lr = points[3];
	var attributes = {stroke: "#e2007a"};
	path(ul.paper, [[ul.attrs.cx, ul.attrs.cy], [ll.attrs.cx, ll.attrs.cy]], attributes);
	path(ul.paper, [[ur.attrs.cx, ur.attrs.cy], [lr.attrs.cx, lr.attrs.cy]], attributes);
    }

    $.fn.non_crossing = function(options){
	var settings = $.extend({
	    "width" : 640,
	    "height" : 480,
	    "radius" : 5,
	    "offset" : 10,
	}, options);

	return this.each(function(){
	    $this = $(this);
	    $this.empty();
	    var points = crossing(this, settings);
	    $this.click(function(){
		short_cut(points);
	    });
	});
    };
})(jQuery, Raphael);
