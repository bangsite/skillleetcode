/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let k = 0;

    if (nums && nums.length === 1) return nums;

    while (k < nums.length) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === 0) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
            }
        }
        k++;
    }

    return nums;
};

/**
 * Two pointer solution
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes2 = function (nums) {
    let move = 0;

    if (nums && nums.length === 1) return nums;

    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[move]] = [nums[move], nums[i]]
            move++;
        }
    }

    return nums;
};

module.exports={
    moveZeroes,
    moveZeroes2
}

const nums = [0, 1, 0, 3, 12];
const nums2 = [0];
const nums3 = [0, 0, 1];

console.log(moveZeroes2(nums));
console.log(moveZeroes2(nums2));
console.log(moveZeroes2(nums3));
