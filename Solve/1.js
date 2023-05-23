var twoSum = function(nums, target) {
    const length = nums.length;

    for(let i=0;i<length;i++){
        for(let j=i+1;j<length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }   
    }
};

console.log(twoSum([2,7,11,15],18));