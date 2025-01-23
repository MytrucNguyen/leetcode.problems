/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const results = [];

    for (let i = 0; i < arr.length; i++) {
        results.push(fn(arr[i], i));
    }
    return results;
};