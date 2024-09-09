/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const numberOfPiles = piles.length;
    const maxBananaCount = Math.max(...piles);
    let start = 1;
    let end = maxBananaCount;
    let result = Infinity;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        let hourTaken = 0;
        let i = 0;
        while(i < numberOfPiles) {
            hourTaken += Math.ceil(piles[i]/mid);
            if (hourTaken > h) {
                start = mid + 1;
                break;
            }
            i++;
        }
        if (i === numberOfPiles) {
            result = Math.min(result, mid);
        }
        if (hourTaken <= h) {
            end = mid - 1;
        }
    }
    return result;
};