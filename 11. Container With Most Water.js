/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left=0;
    let right=height.length-1;

    let maxWater=0;
while(left<right){
    const heightLeft=height[left];
    const heightRight=height[right];
    const width=right-left;
    const volume=(Math.min(heightLeft,heightRight))*width;
    if(volume>maxWater) maxWater=volume;

    if(heightLeft>=heightRight){
        while(height[--right]<=heightRight);
    }else{
        while(height[++left]<=heightLeft);
    }
}
return maxWater;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
