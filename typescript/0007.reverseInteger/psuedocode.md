1. Initialize reverse as 0

    reverse = 0

2. Loop until x is 0:

    while x != 0

3. Extract the last digit of x:

    lastDigit = x % 10

4. Check for overflow before updating reverse:

    if reverse > (2^31 - 1) // 10 or (reverse == (2^31 - 1) // 10 and lastDigit > 7):
        return 0
        
    if reverse < -2^31 // 10 or (reverse == -2^31 // 10 and lastDigit < -8):
    return 0

5. Update reverse by mulitpling 10

    reverse = reverse * 10 + lastDigit

6. Update x by dividing by 10

    x = x / 10

7. Return reverse

    return reverse 