/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const gen = (open, close, acc) => {
        if (open === close && open + close === 2*n) {
            result.push(acc);
            return;
        }
        if (open < n) {
            gen(open + 1, close, `${acc}(`);
        }
        if (close < open) {
            gen(open, close + 1, `${acc})`);
        }
    };
    gen(0, 0, '');
    return result;
};