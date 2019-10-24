/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jerry = J.split(''),
          stone = S.split('');
    return stone.filter(item => jerry.includes(item)).length;
};
// @lc code=end

