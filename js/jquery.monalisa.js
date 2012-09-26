(function($, undefined){
    var createHandlerFrom = function(states){
	var index = 0;
	return function(){
	    var $this = $(this);
	    $this.removeClass(states[index]);
	    index = (index + 1) < states.length ? index + 1: 0;
	    $this.addClass(states[index]);
	};
	
    };
    
    $.fn.monalisa = function(options){
	var settings = $.extend({
	    "states" : ["default", "special"]
	},options);

	return this.each(function(){
	    var $this = $(this);
	    $this.addClass(settings.states[0]);
	    $this.click(createHandlerFrom(settings.states));
	});
	
    }
})(jQuery);