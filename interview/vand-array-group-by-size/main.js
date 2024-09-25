function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        // const temp = arr[i];
        // arr[i] = arr[j]
        // arr[j] = temp;
        // destructuring assigment
        [arr[i], arr[j]] = [arr[j], arr[i]];

    }
    return arr;
}

/**
 *
 * @return {number}
 * @param arr
 * @param groups
 */
function getGroupSize(arr, groups) {
    let groupSize = arr.length >= 3 ? 3 : 2;

    if (arr.length === 2 && groups.filter(group => group.length === 3).length > groups.filter(group => group.length === 2).length) {
        groupSize = 2;
    }
    return groupSize;
}

/**
 *
 * @return {number[]}
 * @param arr
 */
const divideIntoGroups = function (arr) {
    let groups = [];
    let countThreeSizeGroups = 0;
    let countTwoSizeGroups = 0;
    // Viêc uses countThreeSizeGroups & countTwoSizeGroups help giảm sô lượng phép toán cần thiết để xác định kích thước of group tiếp theo, however, việc tối ưu hóa này chỉ có ý nghĩa khi bạn phải xử lý một array lớn.
    //  Ngoài ra, việc tối ưu hóa không nên làm giảm khả năng đọc của code.

    arr = shuffleArray(arr);

    while (arr.length > 0) {
        let groupSize = (arr.length === 2 && countThreeSizeGroups > countTwoSizeGroups) ? 2 : Math.min(3, arr.length);
        // Variable countThreeSizeGroups & countTwoSizeGroups use để theo dõi số lượng group có size 3 & 2, điều này đảm bảo size group 3 luôn >= size group 2

        groups.push(arr.splice(0, groupSize));
        groupSize === 3 ? countThreeSizeGroups++ : countTwoSizeGroups++;
    }

    console.log(groups);

    return groups;
};

module.exports = {divideIntoGroups};


const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
    arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];


console.log(divideIntoGroups(arr));
console.log(divideIntoGroups(arr2));
console.log(divideIntoGroups(arr3));


