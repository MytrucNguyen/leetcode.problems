
`function isPalindrome(x: Integer): Boolean
1. Check if int is negative return false 

    if x < 0
        return false


2. Check if int is a single diget return true\
    if x >= 0 and x < 10
        return true

3. Create a variable to store reversed number 

    original = x
    reversed = 0

4. Use loop to build reversed number

    while x != 0
        lastDigit = x % 10
        reversed = reversed * 10 + lastDigit
        x = x // 10  // Integer division to remove the last digit
        
5. Compare to return true or false
    return original == reversed
`
