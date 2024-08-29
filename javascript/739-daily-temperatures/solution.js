/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    let stack = [];
    let result = Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
};