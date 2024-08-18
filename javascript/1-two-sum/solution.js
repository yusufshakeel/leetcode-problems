/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hm = new Map();
    for(let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const neededNumber = target - currentNumber;
        const indexOfNeededNumberIfExists = hm.get(neededNumber);
        if (indexOfNeededNumberIfExists !== undefined) {
            return [indexOfNeededNumberIfExists, i];
        }
        hm.set(currentNumber, i);
    }
};