/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hm = new Map();
    for(let n of nums) {
        if(hm.has(n)) return true;
        hm.set(n, true);
    }
    return false;
};