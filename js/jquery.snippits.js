(function($, undefined){
    $.fn.snippits = function( options ){
	var settings = $.extend({
	    'suffix' : 'snippit',
	    'directory' : 'snippits',
	    'onFinish' : function(){}
	}, options);
	
	this.each(function(){
	    var snippit = this.dataset[ settings.suffix ];
	    var $this = $(this);
	    $.ajax({
		url : settings.directory + '/' + this.dataset[ settings.suffix ],
		dataType : "text",
		success : function(data){ $this.html(data) },
		async : false
	    });
	});
	
	settings.onFinish();

	return this;
    };
})( jQuery );