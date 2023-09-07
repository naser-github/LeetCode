/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let final_sum = 0;
    let j=0;

    while(k>j){
        sum+=nums[j];
        j++;
    }


    for(let i=k-1; i<nums.length-3;i++){
        console.log(sum)

        if(sum>final_sum){
            final_sum = sum
        }
        
        sum=sum-nums[i-k];
        sum=sum+nums[i];
    }

    return final_sum/k
};


findMaxAverage([1,12,-5,-6,50,3],4)