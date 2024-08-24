/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const minHeight = Math.min(height[l], height[r]);
        const len = r - l;
        area = Math.max(area, minHeight * len);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return area;
};
