/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = new Map();
    let columnMap = new Map();
    let subMap = new Map();
    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            if (board[r][c] === ".") continue;
            if (rowMap.get(r)?.get(board[r][c])) return false;
            if (columnMap.get(c)?.get(board[r][c])) return false;

            const subR = Math.floor(r/3);
            const subC = Math.floor(c/3);
            const subKey = `${subR},${subC}`;
            if (subMap.get(subKey)?.get(board[r][c])) return false;

            if (!rowMap.get(r)) rowMap.set(r, new Map());
            rowMap.set(r, rowMap.get(r).set(board[r][c], true));

            if (!columnMap.get(c)) columnMap.set(c, new Map());
            columnMap.set(c, columnMap.get(c).set(board[r][c], true));

            if (!subMap.get(subKey)) subMap.set(subKey, new Map());
            subMap.set(subKey, subMap.get(subKey).set(board[r][c], true));
        }
    }
    return true;
};