/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let freq = new Map();
  for (let n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const bucket = Array(nums.length + 1).fill(null).map(() => []);
  for(let [n, f] of freq) {
    bucket[f].push(n);
  }

  let result = [];
  for(let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i] !== null) result.push(...bucket[i]);
  }

  return result;
};