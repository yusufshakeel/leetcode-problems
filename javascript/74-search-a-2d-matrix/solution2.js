/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // time complexity: O(m * log n)
    let numberOfRows = matrix.length;
    let numberOfCols = matrix[0].length;
    let targetRow = 0;

    let lastColIndex = numberOfCols - 1;
    while(targetRow < numberOfRows) {
        if(target <= matrix[targetRow][lastColIndex]) break;
        targetRow++;
    }

    if (targetRow === numberOfRows) return false;
    return binarySearch(matrix[targetRow], target) !== -1;
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