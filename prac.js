/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let start = 0
    let mid = 0
    let end = nums.length-1

    while(start<=end){
        
        mid = Math.floor((start+end)/2)

        console.log (start,mid,end)

        if(nums[mid] == target)
            return mid

        nums[mid] > target? end = mid-1: start = mid+1
    }
    return end+1
};

console.log(searchInsert([1,3,6,7,9],4))