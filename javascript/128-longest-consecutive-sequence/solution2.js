/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    // time complexity: O(nlogn)
    nums.sort((a, b) => a - b);
    let longest = 0;
    let sequence = 1;

    // time complexity O(n)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            sequence++;
        } else if (nums[i] === nums[i - 1]) {
            continue;
        } else {
            if (longest < sequence) {
                longest = sequence;
            }
            sequence = 1;
        }
    }
    if (longest < sequence) {
        longest = sequence;
    }

    // total time complexity = O(n) + O(nlogn) = O(nlogn)
    return longest;
};