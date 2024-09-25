/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const mergeArr = []
    let itemPrev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];

        if (interval[0] <= itemPrev[1]) {
            itemPrev[1] = Math.max(itemPrev[1], interval[1])
        } else {
            mergeArr.push(itemPrev);
            itemPrev = interval;

        }
    }

    mergeArr.push(itemPrev);
    return mergeArr;
};

module.exports={
    merge
}
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const intervals2 = [[1, 4], [4, 5]];
const intervals3 = [[1, 4], [0, 4]];
const intervals4 = [[1, 4], [0, 1]];
const intervals5 = [[1, 4], [0, 5]];
const intervals6 = [[1, 4], [0, 2], [3, 5]];

console.log(merge(intervals));
console.log(merge(intervals2));
console.log(merge(intervals3));
console.log(merge(intervals4));
console.log(merge(intervals5));
console.log(merge(intervals6));
