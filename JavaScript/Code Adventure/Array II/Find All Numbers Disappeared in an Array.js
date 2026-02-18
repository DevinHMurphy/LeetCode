/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const numberCache = new Map(); 
    for (let j = 0; j < nums.length; j++){
        numberCache.set(j+1, true);
    }
    //Parse the DataSet and delete when a number appears
    for (let i = 0; i < nums.length; i++) {
        var currentNumber = nums[i]
        if (numberCache.has(currentNumber)) {
            numberCache.delete(currentNumber);
        }
    }
    return Array.from(numberCache.keys())
};