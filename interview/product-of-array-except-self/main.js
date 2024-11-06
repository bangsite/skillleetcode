/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let result = Array(nums.length).fill(1);

    nums.reduce((acc, num, i) => {
        result[i] = acc;
        return acc * num;
    }, 1);

    nums.reduceRight((acc, num, i) => {
        result[i] *= acc;
        return acc * num;
    }, 1);

    return result;
};

const productExceptSelf2 = function (nums) {
    const prefix = new Array(nums.length).fill(1);
    const suffix = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }
    return result;
};

const productExceptSelf3 = function (nums) {
    const result = [];
    let left = 1, right = 1;

    for (let i = 0; i < nums.length; i++) {
        result.push(left);
        left *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};

module.exports = {
    productExceptSelf
}

const n = [1, 2, 3, 4];
const n2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(n));
console.log(productExceptSelf(n2));
