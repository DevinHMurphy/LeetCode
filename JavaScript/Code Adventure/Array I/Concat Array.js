/**
 * Concatenation of Array
 *
 * Given an integer array nums of length n, create an array ans of length 2n
 * where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 *
 * @param {number[]} nums - The input integer array of length n
 * @returns {number[]} - The concatenated array of length 2n
 *
 * @example
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 *
 * @example
 * Input: nums = [1,3,2,1]
 * Output: [1,3,2,1,1,3,2,1]
 * Explanation: The array ans is formed as [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 1000
 * - 1 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var _arr = nums.slice();
    for (let index = 0; index < nums.length; index++){
        _arr.push(nums[index]);
    }
    return _arr
};