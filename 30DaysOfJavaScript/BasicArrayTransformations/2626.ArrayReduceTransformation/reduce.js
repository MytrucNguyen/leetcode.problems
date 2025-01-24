/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let results = init;

    for (let i = 0; i < nums.length; i++) {
        results = fn(results, nums[i]);
    }

    return results;
};