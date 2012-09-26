var between = function(array) {
    var lambda = function(symbol) {
	return array.join(symbol);
    }
    return {
	an : lambda,
	a  : lambda
    };
};

var options = {
    gmail : between(["daan.v.berkel.1980", "gmail.com"]).an("@"),
    twitter : between(["daan", "van", "berkel"]).a("_"),
    github : between(["dvberkel"]).an("empty string")
};

for (key in options) {
    console.log([key, options[key]].join(": "));
};
