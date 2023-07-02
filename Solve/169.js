/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const length = nums.length

    if(length==1)
        return nums[0]
    
    let threshold = Math.ceil(length/2)
    let count = 1;
    
    nums = nums.sort();

    for(let i=0;i<length-1;i++){
        nums[i]==nums[i+1]? count++ : count=1

        if(count>=threshold)
            return nums[i]
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))