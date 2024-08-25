/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const match = {
        ')':'(',
        '}':'{',
        ']':'[',
    };
    for(const ch of s) {
        if (['(','{','['].includes(ch)) {
            stack.push(ch);
        } else {
            if (stack.length === 0 || match[ch] !== stack.pop()) return false;
        }
    }
    return stack.length === 0;
};