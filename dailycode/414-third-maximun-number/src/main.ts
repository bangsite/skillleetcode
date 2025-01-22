/**
 * @param {number[]} nums
 * @return {number}
 */
const findThirdMax = function (nums: number[]) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === thirdMax || nums[i] === secondMax || nums[i] === firstMax) {
            continue;
        }

        if (nums[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = nums[i];
        }
        else if (nums[i] > secondMax) {
            thirdMax = secondMax;
            secondMax = nums[i];

        } else if (nums[i] > thirdMax) {
            thirdMax = nums[i];
        }
    };

    return thirdMax === -Infinity ? firstMax : thirdMax;
}

const findThirdMax2 = function (nums: number[]) {
    nums = [...new Set(nums)].sort((a, b) => b - a);
    console.log('Sort:::', nums);

    return nums.length <= 2 ? nums[0] : nums[2];
}

const findThirdMax3 = function (nums: number[]) {
    const newNums = new Set(nums);

    if (newNums.size < 3) return Math.max(...nums);
    else {
        const first = Math.max(...newNums);
        newNums.delete(first);
        const second = Math.max(...newNums);
        newNums.delete(second);

        return Math.max(...newNums);
    }
}

export {
    findThirdMax,
    findThirdMax2,
    findThirdMax3
}

const n = [3, 2, 1];
const n2 = [1, 2];
const n3 = [2, 2, 3, 1];
const n4 = [22, 210, 113, 91, 45, 5, 77, 98, 85];
const n5 = [1, 2, -2147483648];

console.log(findThirdMax3(n));
console.log(findThirdMax3(n2));
console.log(findThirdMax3(n3));
console.log(findThirdMax3(n4));
console.log(findThirdMax3(n5));
