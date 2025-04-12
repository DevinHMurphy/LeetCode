//2364. Count Number of Bad Pairs -- Time Error
class Solution {
    public long countBadPairs(int[] nums) { 
        int count = 0;
        for (int i = 0; i < nums.length; i++){
            for (int j = 0; j < nums.length; j++){
                if (this.isBadPair(i, j, nums)) {
                    count = count + 1;
                }
            }
        }
        return count;
    }

    private boolean isBadPair(int i, int j, int[] nums){
        if (i < j) { //1st scenario
            if(j - i != nums[j] - nums[i]){ //2nd scenario
                return true;
            }
        }
        return false;
    }
}
// Approach this like a math problem -- We can re arrange the logic 

// INIT : j - i = nums[j] - nums[i] 
// re-arrange eq : nums[i] - i = nums[j] - j ** But why do we care?!?
// We now know that the positions form a good paior when the diff in thier posn. and their value must be the same. 

