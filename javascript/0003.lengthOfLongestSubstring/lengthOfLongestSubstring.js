/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charSet = new Set();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[start]);
            start++;
        }

        charSet.add(s[i]);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};