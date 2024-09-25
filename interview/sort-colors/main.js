/**
 * Solution - Bubble sort
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {

    if (nums.length < 1) return [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return nums
};
/**
 * Solution 2 - Use Merge Sort
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors2 = function (nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);

    const left = sortColors2(nums.slice(0, mid));
    const right = sortColors2(nums.slice(mid));
    console.log(left)
    console.log(right)
    return merge(left, right)
};

function merge(left, right) {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

/**
 * Solution 3 - Use Dutch national flag
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors3 = function (nums) {
    if (nums.length <= 1) return nums;

    let low = 0, mid = 0, high = nums.length - 1;


    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
};


module.exports ={
    sortColors,
    sortColors2,
    sortColors3,
}

const nums = [2, 0, 2, 1, 1, 0];
const nums2 = [2, 0, 1];


// console.log(sortColors3(nums));
// console.log(sortColors3(nums2))
