/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = Infinity;
    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        if (nums[mid] < nums[end]) {
            min = Math.min(min, nums[mid]);
            end = mid - 1;
        } else {
            min = Math.min(min, nums[end]);
            start = mid + 1;
        }
    }
    return min;
};