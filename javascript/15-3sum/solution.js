/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);

    let result = [];

    for(let i = 0; i < nums.length - 2; i++) {
        // ignore duplicates
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
            else {
                result.push([nums[i], nums[left], nums[right]]);

                // ignore duplicates and move to the right
                while(left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // ignore duplicates and move to the left
                while(left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // move left and right pointers closer
                left++
                right--;
            }
        }
    }
    return result;
};