/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


const merge = function (nums1, m, nums2, n) {

    if (n === 0) return nums1;

    for (let i = m; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            nums1[i] = nums2.shift();
        }
    }

    return nums1.sort((a, b) => a - b);
};


const nums1 = [1, 2, 3, 0, 0, 0], m = 3,
    nums2 = [2, 5, 6], n = 3;



console.log(merge(nums1, m, nums2, n));
//result: [1, 2, 2, 3, 5, 6]
