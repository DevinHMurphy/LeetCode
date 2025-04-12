class Solution_1480 {
    public int[] runningSum(int[] nums) {
        int temp = 0;
        int[] out = new int[nums.length]; 
        for (int i = 0; i < nums.length; i++){
            temp = temp + nums[i];
            out[i] = temp;
        }
        return out;
    }
}
