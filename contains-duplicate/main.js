/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    if (nums.length <= 1) return false;
    let newArr = new Map(Array.from(nums, (val) => [val, 0]))

    for (let i = 0; i < nums.length; i++) {
        let dup = newArr.get(nums[i]);

        if (newArr.has(nums[i])) newArr.set(nums[i], ++dup);
    }


    for (const val of newArr.values()) {
        if (val > 1) return true
    }

    return false
};

/**
 * Solution 2
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = function (nums) {
    if (nums.length <= 1) return false;
    let newSet = new Set(nums)

    return newSet.size !== nums.length;
};

/**
 * Solution 3
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate3 = function (nums) {
    if (nums.length <= 1) return false;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
};

/**
 * Solution 4
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate4 = function (nums) {
    if (nums.length <= 1) return false;

    let newSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (newSet.has(nums[i])) return true;
        newSet.add(nums[i]);
    }
    return false;
};

module.exports={
containsDuplicate,
containsDuplicate2,
containsDuplicate3,
containsDuplicate4,
}

const nums = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const nums4 = [0];

console.log(containsDuplicate4(nums));
console.log(containsDuplicate4(nums2));
console.log(containsDuplicate4(nums3));
console.log(containsDuplicate4(nums4));
