/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1
const removeDuplicates = function (nums) {
    let newArr = new Set([...nums]);
    nums.length = 0;

    for (const item of newArr) {
        console.log(item)
        nums.push(item);
    }

    return nums.length;
};

// Solution 2
const removeDuplicates2 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }

    return nums.length;
};

const nums = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums2));
