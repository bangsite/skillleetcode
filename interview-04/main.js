/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * This is not the solution, time complexity must be O(log (m+n))
 * Check Sort() time complexity
 * it is (n+m)log(n+m)
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let newArr = [...nums1, ...nums2].sort((a, b) => a - b);

    let mid = Math.floor(newArr.length / 2);
    console.log(newArr);
    console.log(newArr.length);

    if (newArr.length === 1) return newArr[0];
    if (newArr.length % 2 === 0) {
        return (newArr[mid - 1] + newArr[mid]) / 2;
    } else {
        return newArr[mid];
    }
};


/**
 * Solution 2: Two pointer
 * @param nums1
 * @param nums2
 * @return {number|*}
 */
const findMedianSortedArrays2 = function (nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }

    while (i<nums1.length) merged.push(nums1[i++]);
    while (j<nums2.length) merged.push(nums2[j++]);

    let mid = Math.floor(merged.length / 2);
    console.log(merged);
    console.log(mid);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};


module.exports={
    findMedianSortedArrays,
    findMedianSortedArrays2
}

const num1 = [1, 3], num2 = [2];
const num3 = [1, 2], num4 = [3, 4];
const num5 = [], num6 = [1];
const num7 = [3], num8 = [-2, -1];
const num9 = [], num10 = [2, 3];


console.log(findMedianSortedArrays2(num1, num2));
console.log(findMedianSortedArrays2(num3, num4));
console.log(findMedianSortedArrays2(num5, num6));
console.log(findMedianSortedArrays2(num7, num8));
console.log(findMedianSortedArrays2(num9, num10));
