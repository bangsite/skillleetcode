/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target < nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

const search2 = function (nums, target) {

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if ((nums[mid] < nums[0]) == (target < nums[0])) {
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        } else if (target < nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

module.exports = {
    search
}

const n = [4, 5, 6, 7, 0, 1, 2], target = 0;
const n2 = [4, 5, 6, 7, 0, 1, 2], target2 = 3;
const n3 = [1], target3 = 0;

console.log(search2(n, target));
console.log(search2(n2, target2));
console.log(search2(n3, target3));
