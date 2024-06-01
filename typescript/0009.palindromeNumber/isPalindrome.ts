function isPalindrome(x: number): boolean {
    if (x < 0 ) return false;

    if (x >= 0 && x < 10) return true;

    let original = x;
    let reversed = 0;

    while(x > 0) {
        let lastDigit = x % 10;

        reversed = reversed * 10 + lastDigit;

        x = Math.floor(x / 10);
    }
    return original === reversed;
};