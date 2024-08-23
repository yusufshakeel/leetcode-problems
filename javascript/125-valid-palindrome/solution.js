/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const onlyLowerCaseAlnum = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0;
    let j = onlyLowerCaseAlnum.length - 1;
    while(i < j) {
        if (onlyLowerCaseAlnum[i] !== onlyLowerCaseAlnum[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};