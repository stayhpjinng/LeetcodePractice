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


/**
 * num: 67 
 * title: Add Binary
 * description: Given two binary strings, return their sum (also a binary string).
 * solution: 
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let arrA = a.split('');
    let arrB = b.split('');
    let resultArr = [];
    let emptyArr = [];
    if (arrA.length > arrB.length) {
        emptyArr = Array.apply(null, {length: arrA.length - arrB.length}).map(value => '0');
        arrB = emptyArr.concat(arrB);
    } else {
        emptyArr = Array.apply(null, {length: arrB.length - arrA.length}).map(value => '0');
        arrA = emptyArr.concat(arrA);
    }
    let i = 0;
    let plusResult = 0;
    while(i < arrA.length) {
        let temp = plusResult + arrA[arrA.length-i-1]*1 + arrB[arrB.length-i-1]*1;
        resultArr[i] = temp%2;
        plusResult = Math.floor(temp/2);
        i++;
    }
    if (plusResult === 1) {
        resultArr[arrA.length] = 1;
    }
    return resultArr.reverse().join('');
};


/**
 * num: 69 
 * title: Sqrt(x)
 * description: mplement int sqrt(int x).Compute and return the square root of x.x is guaranteed to be a non-negative integer.
 * solution: 
 * 
* @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x===0 || x===1) {return x}
    for (var i=1; i<=Math.ceil(x/2); i++) {
        if ((x >= i*1) && (x < (i+1)*(i+1))) {
            return i;
        }
    }
};

