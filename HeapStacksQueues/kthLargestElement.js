/*
FAST SOLUTION 
*/
function solution(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
