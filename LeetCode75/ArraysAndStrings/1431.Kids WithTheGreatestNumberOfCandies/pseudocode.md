Problem:

- We are given an array `candies` where each element represents how many candies a kid has.
- We also have an integer `extraCandies` representing additional candies that can be given.
- The goal is to determine if, by giving all extra candies to a kid, they will have the greatest number of candies.
- Return a boolean array where each element is `true` if the corresponding kid can have the most candies, otherwise `false`.

Plan:

- Find max candies among all the kids
- Check each kid with extra candies
- Create an array for true or false which will based off of the condition

PSEUDOCODE:

FUNCTION kidsWithCandies(candies, extraCandies):
create an empty array called results
maxCandies = find max value in candie

    for ii from 0 to candiesLength:
        if candy + extra candy >= maxCandie
            add true results

        else
            add false to result

    return results
