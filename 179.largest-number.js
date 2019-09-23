/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.join('') == 0){
        return '0';
    }
    let temp = nums.map(num => num+'');
    temp.sort((a,b) => {
        return (b + a) - (a + b);
    });
    return temp.join('');
};

