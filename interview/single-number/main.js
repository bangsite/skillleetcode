/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    if (nums && nums.length <= 0) return undefined ;
    if (nums.length === 1) return nums[0];

    let newNums = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = newNums.get(nums[i]) || 0;
        newNums.set(nums[i], val + 1);
    }
    for (const [key, value] of newNums) {
        if (value === 1) return Number(key)
    }

};


const singleNumber2 = function (nums) {
    if (nums && nums.length <= 1) return nums[0];

    const newNums = {};

    for (let n of nums) {
        if (!newNums[n]) newNums[n] = 0;
        newNums[n]++;
    }

    for (let n in newNums) {
        if (newNums[n] === 1) return Number(n)
    }
};

const singleNumber3 = function (nums) {
    if (nums && nums.length <= 1) return nums[0];

    let num = 0;

    for (let n of nums) {
        num ^= n;

    }

    return num
};

const singleNumber4 = function (nums) {
    if (nums && nums.length <= 0) return undefined ;

    let num = {};

    for (let n of nums) {
        num[n] ? delete num[n] : num[n] = 1;
    }

    return Number(Object.keys(num)[0])
};

module.exports = {
    singleNumber,
    singleNumber2,
    singleNumber3,
    singleNumber4
}

const nums = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];
const nums3 = [1];


console.log(singleNumber4(nums));
console.log(singleNumber4(nums2));
console.log(singleNumber4(nums3));
