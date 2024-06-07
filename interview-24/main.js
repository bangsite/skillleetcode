/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    let item = 0;

    for (let i = 0; i < k; i++) {
        item = nums.pop();
        nums.unshift(item);
    }

    console.log(nums);
};

// solution 2
const rotate2 = function (nums, k) {
    let index = nums.length - k%nums.length;
    let arrClone= [...nums];

    for (let i = 0; i < nums.length; i++) {
        if (index === nums.length) index = 0;

        nums[i] = arrClone[index];
        index++;
    }

    console.log(nums)
};


const nums = [1, 2, 3, 4, 5, 6, 7], k = 3,
    nums2 = [-1, -100, 3, 99], k2 = 3,
    nums3 = [-1], k3 = 2;

// rotate(nums, k);
// rotate(nums2, k2);
rotate2(nums, k);
rotate2(nums2, k2);
rotate2(nums3, k3);
