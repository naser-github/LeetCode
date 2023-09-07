/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let final_sum = 0;
  let j = 0;

  while (k > j) {
    sum += nums[j];
    j++;
  }

  final_sum = sum

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];

    if (sum > final_sum) {
      final_sum = sum;
    }
  }

  return final_sum / k;
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
