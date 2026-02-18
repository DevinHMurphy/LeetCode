/**
 * Max Consecutive Ones
 *
 * Given a binary array `nums`, return the maximum number of consecutive 1's in the array.
 *
 * @param {number[]} nums - Binary array containing only 0s and 1s
 * @returns {number} - Maximum number of consecutive 1s
 *
 * @example
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 *              The maximum number of consecutive 1s is 3.
 *
 * @example
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - nums[i] is either 0 or 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let consecutiveMax = 0
    let currentMax = 0
    //Get the entry
    for (let i = 0; i < nums.length; i++){
        const entry = nums[i];
        //Compare the entry
        if (entry == 0){
            currentMax = 0
        } else {
            currentMax++ 
            if (currentMax > consecutiveMax){
                //Udpate max value if applicable
                consecutiveMax = currentMax
            }
        }
    }
    return consecutiveMax
};