function addition(m, n) {
    return m + n;
};

profile(addition).on([
    [ 3, 2 ],
    [ 31, 27 ],
    [ 314, 271 ],
    [ 3141, 2718 ],
    [ 31415, 27182 ],
    [ 314159, 271828 ],
]);