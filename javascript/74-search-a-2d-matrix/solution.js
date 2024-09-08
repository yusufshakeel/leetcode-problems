/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // time complexity: O(log (m * n))
    let targetRow = binarySearchRow(matrix, target);
    if (targetRow === -1) return false;
    return binarySearch(matrix[targetRow], target) !== -1;
};

const binarySearchRow = (matrix, target) => {
    let lastColIndex = matrix[0].length - 1;
    let start = 0
    let end = matrix.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][lastColIndex]) return mid;
        if (target > matrix[mid][lastColIndex]) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};

const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midVal = nums[mid];
        if (midVal === target) return mid;
        if (midVal < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};