/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    const length = flowerbed.length;
  
    if (n == 0 || (length == 1 && flowerbed[0] == 0)) {
        return true;
    }
  
    for (let i = 0; i <= length; i++) {
        if (flowerbed[i] == 0) {
            if (
                (i == 0 && flowerbed[i + 1] == 0) ||
                (i == length - 1 && flowerbed[i - 1] == 0) ||
                (n + 1 < length && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0)
            ) {
                i++;
                n--;
            }
        }
        if (n == 0) {
            return true;
        }
    }
    return false;
  };
  
  console.log(canPlaceFlowers([1,0,1,0,1], 0))