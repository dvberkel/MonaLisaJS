(function($,undefined){
    $(function(){
	$("#toc").toc({
	    'selectors' : 'h2',
	    'container' : 'body',
	    'smoothScrolling': false,
	    'prefix': 'toc',
	    'highlightOnScroll': false
	}).decktoc();

	$("textarea.code").snippits({
	    onFinish : function(){$.deck(".slide");}
	});
    });
})(jQuery);
