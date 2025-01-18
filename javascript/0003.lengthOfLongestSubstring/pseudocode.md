Problem:
Find the longest substring without repeating characters

Plan:

- Using the sliding window apporach

1. Use two pointers (start and end) to represent the current substring
2. Expand window by moving end and keep track of the characters in the window
3. If a character is repeated, move the start pointer to the right until there is no more repeat
4. Keep track of the maximum length of any valid substring

```Psuedocode
function lengthOfLongestSubstring(s):
    create a set to store characters
    initialize start point
    initialize maxlength

    for end from 0 to length of s:
        while character at s[end] is in the set:
            remove s[start] from set
            move start point to right

        add s[end] to the set
        update maxLength as max of maxLength and (end-start +1)

    return maxLength
```
