/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        let [j, k] = [i + 1, nums.length - 1];

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (nums[j] === nums[j - 1]) j++;

                while (nums[k] === nums[k + 1]) k--;
            } else if (sum < 0) j++;
            else k--;
        }
    }
    return result;
}

module.exports={
    threeSum
}

const nums = [-1, 0, 1, 2, -1, -4], nums2 = [0, 1, 1], nums3 = [0, 0, 0];
nums4 = [0, 0, 0, 0];

console.log(threeSum(nums));
console.log(threeSum(nums2));
console.log(threeSum(nums3));
console.log(threeSum(nums4));
