/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const length = nums.length
    for(let i=0;i<length;i++){

        if(nums[i]>target ||nums[i]==target){
            return i
        }
    }
    return length
};

console.log(searchInsert([5,6,7,8],9))