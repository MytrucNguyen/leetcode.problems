Problem:

- Given two strings 's' and 't'.
- t divides s if s is made by repeating t one or more

- Given two strings return largest string x
- x divides both str1 and str2

Plan:

- Check if a common pattern exisit
- Find repeating patterns
- Get common substring

PSEUDOCODE:

FUNCTION gcdOfStrings(string1, string2):
if string1 + string2 != string2 + string1:
return "";

    gcdLength = gcd(length of string1, length of string 2)
    return substring of string1 from 0 to gcdLength
