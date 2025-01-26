/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const results = [];

    const maxCandies = Math.max(...candies);

    for (let ii = 0; ii < candies.length; ii++) {
        if (candies[ii] + extraCandies >= maxCandies) {
            results.push(true);
        }
        else results.push(false);
    }

    return results;
};