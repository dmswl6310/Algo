/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const size=nums.length;
    let zeroNum=0;
    for(let i=0;i<size;i++){
        const num=nums.shift();
        if(num!==0) {
            nums.push(num);
        }else{
            zeroNum++;
        }
    }
    for(let i=0;i<zeroNum;i++){
    nums.push(0);
    }
    return nums;
};