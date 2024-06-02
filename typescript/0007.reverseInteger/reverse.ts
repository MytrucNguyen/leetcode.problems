function reverse(x: number): number {
    let reverse = 0;
    const INT_MAX = Math.pow(2, 31) - 1; 
    const INT_MIN = -Math.pow(2, 31); 

    while(x != 0){
        let lastDigit = x % 10;

        if (reverse > Math.floor(INT_MAX / 10) || (reverse === Math.floor(INT_MAX / 10) && lastDigit > 7)) {
            return 0;
        }
        if (reverse < Math.ceil(INT_MIN / 10) || (reverse === Math.ceil(INT_MIN / 10) && lastDigit < -8)) {
            return 0;
        }

        reverse = reverse * 10 + lastDigit;

        x = Math.trunc(x / 10);
    }

    return reverse;
};