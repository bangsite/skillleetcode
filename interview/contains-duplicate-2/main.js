/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
        }
    }

    return false;

};
const containsNearbyDuplicate2 = function (nums, k) {
    const newData = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (i - newData.get(nums[i]) <= k) return true;

        newData.set(nums[i], i);
        console.log(newData)
    }

    return false;

};


const nums = [1, 2, 3, 1], k = 3,
    nums2 = [1, 2, 3, 1], k2 = 3,
    nums3 = [1, 2, 3, 1, 2, 3], k3 = 2;


console.log(containsNearbyDuplicate(nums, k));
console.log(containsNearbyDuplicate(nums2, k2));
console.log(containsNearbyDuplicate(nums3, k3));
