class Solution {
    public int findClosestNumber(int[] nums) {
        int num=100001;
        for(int i=0;i<nums.length;i++){
            int target=nums[i];
            int targetAbs=Math.abs(target);

            if(targetAbs<Math.abs(num)){
                num=target;
            }else if(targetAbs==Math.abs(num)){
                if(target>num) num=target;
            }
        }
        return num;
    }
}