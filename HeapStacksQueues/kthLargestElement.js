/*
FAST SOLUTION 
function solution(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
*/

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function partition(nums, left, right) {
  const pivot = nums[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (nums[j] >= pivot) {
      i++;
      swap(nums, i, j);
    }
  }

  swap(nums, i + 1, right);
  return i + 1;
}

function quickselect(nums, left, right, k) {
  const pivotIndex = partition(nums, left, right);

  if (pivotIndex === k - 1) {
    return nums[pivotIndex];
  } else if (pivotIndex > k - 1) {
    return quickselect(nums, left, pivotIndex - 1, k);
  } else {
    return quickselect(nums, pivotIndex + 1, right, k);
  }
}

function solution(nums, k) {
  return quickselect(nums, 0, nums.length - 1, k);
}
