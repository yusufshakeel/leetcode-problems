/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = '+-*/';
    let stack = [];
    const calc = {
        '+': (x,y) => x+y,
        '-': (x,y) => x-y,
        '*': (x,y) => x*y,
        '/': (x,y) => parseInt(x/y),
    }
    tokens.forEach(t => {
        if (operators.indexOf(t) > -1) {
            const second = stack.pop();
            const first = stack.pop();
            const result = calc[t](first, second);
            stack.push(result);
        } else {
            stack.push(+t);
        }
    });
    return stack.pop();
};