/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {

    let count = 0;
    let majorityEl = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) majorityEl = nums[i];
        console.log(`count 1 ${i}::${count}::${majorityEl}`);

        if (majorityEl === nums[i]) {
            count++;
            console.log(`count 2 ${i}::${count}::${majorityEl}`);

        } else count--;
        console.log(`count 3 ${i}::${count}::${majorityEl}`);

    }

    return majorityEl;
};


// Test
const nums = [3, 2, 3];
const nums2 = [2, 2, 1, 2,1,1,1,1, 2];
const nums3 = [6,5,5];

console.log(majorityElement(nums2))
// result 3
