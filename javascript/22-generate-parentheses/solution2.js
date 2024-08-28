/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const stack = [{ open: 0, close: 0, acc: '' }];

    while (stack.length > 0) {
        const { open, close, acc } = stack.pop();

        if (open === close && open + close === 2 * n) {
            result.push(acc);
            continue;
        }

        if (open < n) {
            stack.push({ open: open + 1, close: close, acc: `${acc}(` });
        }

        if (close < open) {
            stack.push({ open: open, close: close + 1, acc: `${acc})` });
        }
    }

    return result;
};