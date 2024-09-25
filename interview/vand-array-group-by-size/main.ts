function shuffleArray(arr: string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
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
function getGroupSize(arr: string[], groups: string[][]) {
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
const divideIntoGroups = function (arr: string[]) {
    let groups: string[][] = [];
    let countThreeSizeGroups = 0;
    let countTwoSizeGroups = 0;
    // Uses countThreeSizeGroups & countTwoSizeGroups help to reduce the number of operations needed to determine the size of the next group.
    // However,  this optimization only makes sense when you deal with a large array
    // Also, this optimization should not reduce the readability of the code
    arr = shuffleArray(arr);

    while (arr.length > 0) {
        let groupSize = (arr.length === 2 && countThreeSizeGroups > countTwoSizeGroups) ? 2 : Math.min(3, arr.length);
        // Variable countThreeSizeGroups & countTwoSizeGroups are used to track the number of groups with sizes 3 & 2, this ensures size group 3 always >= size group 2

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


