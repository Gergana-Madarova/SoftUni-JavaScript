function extractIncreasingSubsequence(arr) {
    let biggest = arr[0];
    const filterEl = [biggest];

    for (let index = 1; index <= arr.length; index++) {
        let sliceArr = arr.slice(0, index);
        let maxFromSlice = Math.max(...sliceArr);

        if (maxFromSlice === biggest && arr[index] === biggest) {
            filterEl.push(biggest);
        }

        if (maxFromSlice > biggest) {
            biggest = maxFromSlice;
            filterEl.push(biggest);
        }
    }

    return filterEl;
}

//console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
//console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
//console.log(extractIncreasingSubsequence([20, 3, 15, 6, 1]));
console.log(extractIncreasingSubsequence([20, 20, 15, 6, 61]));