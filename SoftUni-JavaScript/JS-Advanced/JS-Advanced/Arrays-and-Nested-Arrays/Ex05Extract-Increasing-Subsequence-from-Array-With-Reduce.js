function extractIncreasingSubsequence(arr) {
    const filterEl = [];
    arr.reduce(function (acc, curr) {
        if (curr >= acc) {
            filterEl.push(curr);
            return curr;
        }
        else{
            return acc;
        }
    }, arr[0]);

    return filterEl;
}

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
console.log(extractIncreasingSubsequence([20, 3, 15, 6, 1]));
console.log(extractIncreasingSubsequence([20, 20, 15, 6, 61]));