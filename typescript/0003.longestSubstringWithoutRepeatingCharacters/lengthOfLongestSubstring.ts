function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let start = 0;
    let charIndexMap: { [key: string]: number } = {}; 

    for (let end = 0; end < s.length; end++) { 
        if (charIndexMap[s[end]] !== undefined && charIndexMap[s[end]] >= start) {
            start = charIndexMap[s[end]] + 1; 
        }

        charIndexMap[s[end]] = end;  
        maxLength = Math.max(maxLength, end - start + 1); 
    }

    return maxLength; 
}
