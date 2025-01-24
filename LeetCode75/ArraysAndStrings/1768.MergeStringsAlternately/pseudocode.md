Problem:

- Given two strings
- Merged strings in alternating order
- Append additional letters onto the end if a string is longer than the other
- Return our merged string

Plan:

- We can use a loop to alternate characters from string
- Start with empty results
- Find the length of both strings
- Go through both, letter by letter (up to the shortest one)
- Check if there's any left over letters
- Return results

PSEUDOCODE:

FUNCTION mergeAlternately(string1, string2):
create an empty string

    find max length of two two strings

    for ii from 0 to max length:
        if i is within the string1 length:
            add string1[ii] to empty string created

        if i is within the string2 length:
            add string2[ii] to empty string created

    return results
