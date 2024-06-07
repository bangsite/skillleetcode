/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, i + nums[i]);

        if (max >=nums.length -1) return  true;

        if (max <=i && nums[i]===0) return false;


    }
    return false;
};

const nums = [2, 3, 1, 1, 4],
    nums2 = [3, 2, 1, 0, 4];


console.log(canJump(nums));
console.log(canJump(nums2));
