function verify_factorization(product, factors) {
    var result = 1;
    factors.forEach(function(factor){
	result = result * factor;
    });
    return product === result;
}

profile(verify_factorization).on([
    [3, oracle(3)],
    [31, oracle(31)],
    [314, oracle(314)],
    [3141, oracle(3141)],
    [31415, oracle(31415)],
    [314159, oracle(314159)],
]);
