/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;

    let totalPlots = flowerbed.length;

    for (let i = 0; i < totalPlots; i++) {
        if (flowerbed[i] === 1) continue;

        let isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
        let isRightEmpty = (i === totalPlots - 1 || flowerbed[i + 1] === 0);

        if (isLeftEmpty && isRightEmpty) {
            flowerbed[i] = 1;
            n--;

            if (n === 0) {
                return true;
            }

            i++;
        }
    }

    return n === 0;
};
