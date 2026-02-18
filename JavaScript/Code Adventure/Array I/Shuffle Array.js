/**
 * Shuffle the Array
 *
 * Given the array nums consisting of 2n elements in the form
 * [x1, x2, ..., xn, y1, y2, ..., yn], return the array in the
 * form [x1, y1, x2, y2, ..., xn, yn].
 *
 * @param {number[]} nums - Array of 2n elements to shuffle
 * @param {number} n - Half the length of the array
 * @returns {number[]} - The shuffled array with elements interleaved
 *
 * @example
 * Input: nums = [2,5,1,3,4,7], n = 3
 * Output: [2,3,5,4,1,7]
 * Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
 *
 * @example
 * Input: nums = [1,2,3,4,4,3,2,1], n = 4
 * Output: [1,4,2,3,3,2,4,1]
 *
 * @example
 * Input: nums = [1,1,2,2], n = 2
 * Output: [1,2,1,2]
 *
 * Constraints:
 * - 1 <= n <= 500
 * - nums.length == 2n
 * - 1 <= nums[i] <= 10^3
 */


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
    const chunkSize = n;
    const chunkList = [];
    const _arr = [];
    //Create Chunks
    for (let i = 0; i < nums.length; i += chunkSize) {
        const chunk = nums.slice(i, i + chunkSize);
        chunkList.push(chunk);
    }
    //Parse Created Chunks for data
    var chunkIndex = 0;
    while (chunkIndex < n){
        for (let y = 0; y <chunkList.length; y++){
            _arr.push(chunkList[y][chunkIndex]);
        }
        chunkIndex++;
    }
    return _arr;
};