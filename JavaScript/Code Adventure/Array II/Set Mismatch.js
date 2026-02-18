/**
 * Set Mismatch
 *
 * You have a set of integers which originally contains all the numbers from 1 to n.
 * Due to some error, one of the numbers got duplicated to another number in the set,
 * which results in repetition of one number and loss of another number.
 *
 * Find the number that occurs twice and the number that is missing and return them
 * in the form of an array.
 *
 * @param {number[]} nums - Array representing the data status after the error
 * @returns {number[]} - Array containing [duplicate, missing]
 *
 * @example
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 *
 * @example
 * Input: nums = [1,1]
 * Output: [1,2]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - 1 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let _arr = []

    const numberCache = new Map(); 
    for (let j = 1; j <= nums.length; j++){
        numberCache.set(j, true);
    }
    //Parse the DataSet
    for (let i = 0; i < nums.length; i++) {
        var currentNumber = nums[i]
        if (!numberCache.has(currentNumber)) {
            //the entry is already removed so its a repeated value
            _arr.push(currentNumber);
        }
        //remove the entry
        numberCache.delete(currentNumber);
    }
    _arr.push(numberCache.keys().next().value);
    return _arr;
};