/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const array = s.split(''),
          temp = [],
          dict = {
            '{': 1,
            '}': -1,
            '[': 2,
            ']': -2,
            '(': 3,
            ')': -3
          };
    while (array.length) {
      const char = array.shift();
      if (dict[char] > 0){
        //左括号
        temp.push(dict[char]);
      } else {
        //右括号
        const target = temp.pop();
        if(target + dict[char] !== 0) {
          return false;
        }
      }
    }
    if (temp.length === 0) {
      return true;
    } else {
      return false;
    }
};
// @lc code=end