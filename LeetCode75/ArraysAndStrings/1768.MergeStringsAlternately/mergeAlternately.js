/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedString = '';

    let maxLengthOfTwoStrings = Math.max(word1.length, word2.length);

    for (let ii = 0; ii < maxLengthOfTwoStrings; ii++) {
        if (ii < word1.length) {
            mergedString + word1[ii];
        }
        if (ii < word2.length) {
            mergedString + word2[ii];
        }
    }

    return mergedString;
};