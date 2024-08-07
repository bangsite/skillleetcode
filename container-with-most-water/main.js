/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let maxWidth = right - left;
        let maxHeight = Math.min(height[right], height[left]);
        maxArea = Math.max(maxArea, maxWidth * maxHeight)

        if (height[right] < height[left]) right--; else left++;
    }

    return maxArea;

};

module.exports = {maxArea};


const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height2 = [1, 1];
const height3 = [1, 2, 1];
const height4 = [2, 3, 4, 5, 18, 17, 6];

console.log(maxArea(height));
console.log(maxArea(height2));
console.log(maxArea(height3));
console.log(maxArea(height4));// 17
