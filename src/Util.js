(function(MonaLisa, undefined){
    var ErrorLog = function(){
	this._log = [];
	
	this.hasErrors = function() {
	    return this._log.length > 0;
	};
	
	this.add = function(errorMessage) {
	    this._log.push(errorMessage);
	};
    };

    MonaLisa.ErrorLog = ErrorLog;
})(MonaLisa);