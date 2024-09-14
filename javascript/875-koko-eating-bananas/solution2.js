/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const isAbleToEatAllBananas = k => {
        let hoursTaken = 0;
        piles.forEach(p => {
            hoursTaken += Math.ceil(p/k);
        });
        return hoursTaken <= h;
    };
    let start = 1;
    let end = Math.max(...piles);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (isAbleToEatAllBananas(mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};
