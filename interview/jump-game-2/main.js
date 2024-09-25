/**
 * @param {number[]} nums
 * @return {number}
 * Since each element ofo ur input array (N) represents the maximum jump length and not definite jump length, that means we can visit any index between the current index (i) and i + N[i];
 */
const jump = function (nums) {
    let len = nums.length - 1;
    let current = -1;
    let answer = 0;
    let next = 0;


    for (let i = 0; next < len; i++) {
        if (i > current) {
            answer++;
            current = next;
        }

        next = Math.max(next, nums[i] + i);

    }

    return answer
};

const nums = [2, 3, 1, 1, 4], nums2 = [2, 3, 0, 1, 4], nums3 = [1, 2];

console.log(jump(nums));
console.log(jump(nums2));
console.log(jump(nums3));
