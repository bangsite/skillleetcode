/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }

    console.log(result);
    return result;
};

// solution 2
const twoSum2 = function (nums, target) {
    let result = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (result.has(target - nums[i])) {
            return [result.get(target - nums[i]), i]
        } else result.set(nums[i], i);
    }

    return result;
};


const nums = [2, 7, 11, 15], target = 9,
    nums2 = [3, 2, 4], target2 = 6,
    nums3 = [3, 3], target3 = 6;

console.log(twoSum2(nums, target));
console.log(twoSum2(nums2, target2));
console.log(twoSum2(nums3, target3));
