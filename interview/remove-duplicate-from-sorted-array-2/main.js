/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    let result = nums;
    console.log('result:::', result);
    let currentIndex = nums[0];
    let count = 0;
    let position = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = position; j < nums.length; j++) {
            if (currentIndex === nums[j]) {
                count++;

            }
            console.log('j:::', j);
            console.log('count:::', count);

            if (count > 2) {
                nums.splice(j, 1, '');
                count--;
                position = j + 1;
            }
            position = j++;
            console.log('count after plus:::', count);
            console.log('position:::', position);
            console.log('currentIndex:::', currentIndex);
            console.log('nums:::', nums);
        }

        currentIndex = position;
        count = 0;
    }
    console.log('nums:::', nums.filter(item => item !== ''));
    nums = nums.filter(item => item !== '');
    return nums.length;
};

// solution 2
const removeDuplicates2 = (nums) => {
    let j = 0;
    let i = 0;

    for (; i < nums.length; i += 1) {
        if (nums[i] !== nums[i + 2]) {
            console.log('i:::', i);
            nums[j] = nums[i];
            console.log('nums:::', nums);
            j += 1;
            console.log('j:::', j);
        }
    }

    return j;
};

// solution 3
const removeDuplicates3 = (nums) => {
    // special case...
    if (nums.length <= 2) return nums.length;

    // Initialize an integer k that updates the k th index of the array...
    // only when the current element does not match either of the two previous indexes...
    let k = 2;
    // traverse elements through loop...
    for (let i = 2; i < nums.length; i++) {
        // if the index does not match the (k-1)th and (k-2)th elements, count that element...
        if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
            nums[k]=nums[i];
            k++;
        }

        // if the index matches the (k-1)th and (k-2)th element, we skip it...

    }

    // return k after placing final result in the first k slots of nums...
    return k;
};

const nums = [1, 1, 1, 2, 2, 3],
    nums4 = [1, 2, 2, 2],
    nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3],
    nums3 = [-49, -49, -49, -49, -49, -49, -48, -45, -44];


// solution
// console.log(removeDuplicates(nums));
// console.log(removeDuplicates(nums2));
// console.log(removeDuplicates(nums3));
// console.log(removeDuplicates(nums4));

// solution 3
// console.log(removeDuplicates3(nums));
// console.log(removeDuplicates3(nums2));
console.log(removeDuplicates3(nums3));
// console.log(removeDuplicates3(nums4));
