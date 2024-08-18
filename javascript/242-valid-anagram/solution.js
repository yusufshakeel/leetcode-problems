/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let hm = new Map();
    for(let ch of s) {
        if (hm.has(ch)) hm.set(ch, (hm.get(ch) || 0) + 1);
        else hm.set(ch, 1)
    }

    for(let ch of t) {
        const frequency = hm.get(ch);
        if (!frequency) return false;
        hm.set(ch, frequency - 1);
    }

    return true;
};