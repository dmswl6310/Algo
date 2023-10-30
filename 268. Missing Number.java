import java.util.Arrays;

class Solution {
    public int missingNumber(int[] nums) {
        Arrays.sort(nums);
        int target=0;
        
        for(int num:nums){
            if(num!=target){
                return target;
            }
            target++;
        }
        return nums.length;
    }
}