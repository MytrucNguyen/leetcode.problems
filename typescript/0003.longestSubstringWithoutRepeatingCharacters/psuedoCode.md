1. Initialization: 
    - Initialize maxLength to 0 to track the length of the longest substring found.
    - Initialize start to 0 to mark the beginning of the current window.
    - Initialize an empty hashmap charIndexMap to store the last index of each character.

2. Loop Through the String:
    - For end from 0 to length of the string s - 1:
    - If s[end] is in charIndexMap and charIndexMap[s[end]] is greater than or equal to start:
    - Set start to charIndexMap[s[end]] + 1 (move the start pointer to the right of the last occurrence of s[end]).
    - Update charIndexMap[s[end]] to end (store the current index of s[end]).
    - Update maxLength to be the maximum of maxLength and end - start + 1 (length of the current window).

3. Return the Result:
    - Return maxLength.

```
function lengthOfLongestSubstring(s: String): Integer
    maxLength = 0
    start = 0
    charIndexMap = {}

    for end from 0 to length of s - 1
        if s[end] is in charIndexMap and charIndexMap[s[end]] >= start
            start = charIndexMap[s[end]] + 1

        charIndexMap[s[end]] = end
        maxLength = max(maxLength, end - start + 1)

    return maxLength
```