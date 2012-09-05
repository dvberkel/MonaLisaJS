describe("Combinatorics", function(){
    describe("(permutations)",function(){
	it("should provide  all permutations for an array of length 1", function(){
	    var permutations = [];

	    Combinatorics.allPermutationsOf(['a'], function(permutation){
		permutations.push(permutation);
	    });
	    
	    expect(permutations.length).toBe(1);
	    expect(permutations).toContain(['a']);
	});

	it("should provide  all permutations for an array of length 2", function(){
	    var permutations = [];

	    Combinatorics.allPermutationsOf(['a', 'b'], function(permutation){
		permutations.push(permutation);
	    });
	    
	    expect(permutations.length).toBe(2);
	    expect(permutations).toContain(['a', 'b']);
	    expect(permutations).toContain(['b', 'a']);
	});

	it("should provide  all permutations for an array of length 3", function(){
	    var permutations = [];

	    Combinatorics.allPermutationsOf(['a', 'b', 'c'], function(permutation){
		permutations.push(permutation);
	    });
	    
	    expect(permutations.length).toBe(6);
	    expect(permutations).toContain(['a', 'b', 'c']);
	    expect(permutations).toContain(['a', 'c', 'b']);
	    expect(permutations).toContain(['b', 'a', 'c']);
	    expect(permutations).toContain(['b', 'c', 'a']);
	    expect(permutations).toContain(['c', 'a', 'b']);
	    expect(permutations).toContain(['c', 'b', 'a']);
	});
    });
});