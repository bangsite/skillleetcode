/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    let range = [];
    let rangeStart = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            if (rangeStart === nums[i]) range.push(`${nums[i]}`);
            else range.push(`${rangeStart}->${nums[i]}`);

            rangeStart = nums[i + 1];
        }
    }
    console.log(range);
    return range;
};

// solution 2
const summaryRanges2 = function (nums) {
    let rangeStart = nums[0];

    const temp = nums.reduce((acc, currentVal, index) => {
        console.log('currentVal:::',currentVal )
        console.log('nums[index + 1]:::',index)
        if (currentVal + 1 !== nums[index + 1]) {
            if (rangeStart === currentVal) acc.push(`${currentVal}`);
            else acc.push(`${rangeStart}->${currentVal}`);

            rangeStart = nums[index + 1];
        }
        return acc;
    }, []);

    console.log(temp);
    return temp;
};


const nums = [0, 1, 2, 4, 5, 7],
    nums2 = [0, 2, 3, 4, 6, 8, 9];

console.log(summaryRanges(nums));
console.log(summaryRanges(nums2));

