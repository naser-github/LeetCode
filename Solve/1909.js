/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  const length = nums.length;
  let flag = 0;
  let min = 0;
  let remove = 0;
  
  for (let i = 1; i < length; i++) {
    if (nums[i - 1] >= nums[i]) {
      flag++
      remove = nums[i - 1]
      if(flag>1){
        break
      }
    }
    else{
      if(min>=nums[i-1] && remove>=nums[i] && flag==1){
        flag++
        break
      }else{
        min = nums[i-1]
      }
    }
  }
  return flag<2?true:false
};

console.log(canBeIncreasing([1,5,10,7,9]));
console.log(canBeIncreasing([2,3,1,2]));
console.log(canBeIncreasing([2,3,4,5,1,5]));
console.log(canBeIncreasing([105,924,32,968]));
console.log(canBeIncreasing([541,783,433,744]));



