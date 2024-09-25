/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) nums.splice(i, 1);
    }

    console.log(nums);
    return nums.length;

};

const removeElement2 = function (nums, val) {

    const newArr = nums.filter(item => item !== val)

    for (let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i]
    }

    return newArr.length;

};
// Since JavaScript is a pass by value language just saying:
// nums = nums.filter(x => x!=val)
// will not work. But you can still change the references of specific members of objects in javascript and have these peresist outside the function. So this solution simply reassigns the first values of nums to the values of the filtered array.

// Hope this helps anyone that tried to use the "filter" function in their solution.


const nums = [3, 2, 2, 3], val = 3;
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2], val2 = 2;

console.log(removeElement(nums, val));
