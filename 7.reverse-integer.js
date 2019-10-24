/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let abs = Math.abs(x).toString().split(""),
        temp = [];
  while(abs.length){
    temp.push(abs.pop());
  }
  while(abs[0] === '0'){
    temp.shift();
  }
  temp = parseInt(temp.join(''));
  if(x < 0){
    temp = -temp;
  }
  if(temp >= Math.pow(2, 31) - 1 || temp <= -Math.pow(2, 31)){
    return 0;
  }else{
    return temp;
  }
};
// @lc code=end
