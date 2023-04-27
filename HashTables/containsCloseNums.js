function containsCloseNums(nums, k) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numObj[nums[i]] !== undefined && i - numObj[nums[i]] <= k) {
      return true;
    }
    numObj[nums[i]] = i;
  }
  return false;
}
