/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }

    if (nums.includes(target)) return nums.indexOf(target);
    else {
        nums = [...nums, target];
        return nums.sort((a, b) => a - b).indexOf(target);
    }
};

// use binary search
const searchInsert2 = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;


    while (left !== right) {
        let mid = Math.floor((left + right) / 2);
        console.log('mid:::',mid)
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
        console.log('left:::', left)
        console.log('right:::', right)
    }

    console.log('left:::', left)

    return target > nums[nums.length - 1] ? left + 1 : left;
};


const nums = [1, 3, 5, 6], target = 5,
    nums2 = [1, 3, 5, 6], target2 = 2,
    nums3 = [1, 3, 5, 6], target3 = 7,
    nums4 = [3, 5, 7, 9, 10], target4 = 8;

console.log(searchInsert(nums, target));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums3, target3));
console.log(searchInsert(nums4, target4));

// console.log(searchInsert2(nums, target));
// console.log(searchInsert2(nums2, target2));
console.log(searchInsert2(nums3, target3));
console.log(searchInsert2(nums4, target4));
