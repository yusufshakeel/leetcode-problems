/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hm = new Map();
    for(let str of strs) {
        const sortedString = str.split('').sort().join('');
        if (!hm.has(sortedString)) {
            hm.set(sortedString, []);
        }
        hm.get(sortedString).push(str);
    }
    return Array.from(hm.values());
};
