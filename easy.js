/**
 * num: 66 
 * title: Plus One
 * description: Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 *			    You may assume the integer do not contain any leading zero, except the number 0 itself.
 *			  	The digits are stored such that the most significant digit is at the head of the list.
 * solution: 
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let isAdd = true;
    for(let i=digits.length-1; i>=0; i--) {
        if (isAdd) {
            if (digits[i]+1 === 10) {
                digits[i] = 0;
                isAdd = true;
            } else {
                digits[i] = digits[i] + 1;
                isAdd = false;
            }
        }
    }
    if (isAdd) {
        digits.unshift(1);
    }
    return digits;
};
