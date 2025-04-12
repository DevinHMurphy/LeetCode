class Solution_724 {
    public int pivotIndex(int[] nums) {
            int left = 0;
            int right = 0;
        for(int x = 0; x < nums.length; x ++){
            left = 0;
            right = 0;
            for(int y = 0; y < x; y++){
                left += nums[y];
            }
            for(int z = x+1; z < nums.length; z ++){
                right += nums[z];
            }
            if (left == right){
                return x;
            }
        }
        return -1;
    }
}