/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const length = nums.length
    const threshold = Math.floor(length/2)

    if(threshold === 0){
        return nums[threshold]
    }

    for(let i = 0; i<length;i++){   
        if(map.has(nums[i])){
            let num = map.get(nums[i])
            
            if(num.val>=threshold){
                return nums[i]
            }

            num.val++
        }else
            map.set(nums[i],{val:1})
    }

    return map;

};

console.log(majorityElement([3,2,3]))