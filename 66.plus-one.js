/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const temp = [];
    if(digits[digits.length - 1] == 9){
        temp.push(digits.pop());
        while(digits.length > 0){
            if(digits[digits.length - 1] == 9){
                temp.push(digits.pop());
            }else{
                break;
            }
        }
        if(digits.length === 0){
            digits.push(1);
        }else{
            digits.push(digits.pop() + 1);
        }
        for(let i = 0; i < temp.length; i++){
            digits.push(0);
        }
    }else{
        digits.push(digits.pop() + 1);
    }
    return digits;
};

