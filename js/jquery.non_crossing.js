(function($, Raphael, undefined){
    var point = function(paper, settings, max_x, max_y, min_x, min_y) {
	min_x = min_x != null ? min_x : 0;
	min_y = min_y != null ? min_y : 0;
	var x = Math.random() * (max_x - min_x) + min_x;
	var y = Math.random() * (max_y - min_y) + min_y;
	return paper.circle(x, y, settings.radius);
    }
    
    var coordinate = function(point) {
	return "" + point[0] + "," + point[1];
    }
    
    var path = function(paper, settings, points) {
	var description = "M" + coordinate(points[0]);
	for (var index = 1; index < points.length; index++) {
	    description += "L" + coordinate(points[index]);
	}
	return paper.path(description);
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
	var down_path = path(paper, settings, [[0,0], [ul.attrs.cx, ul.attrs.cy], [lr.attrs.cx, lr.attrs.cy], [width, height]]);
	var up_path = path(paper, settings, [[0, height], [ll.attrs.cx, ll.attrs.cy], [ur.attrs.cx, ur.attrs.cy], [width, 0]]);
	
    };


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
	    crossing(this, settings);
	});
    };
})(jQuery, Raphael);
