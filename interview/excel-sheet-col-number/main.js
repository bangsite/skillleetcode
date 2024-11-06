/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
    const len = columnTitle.length - 1;
    const charBase = 'A'.charCodeAt(0) - 1;
    let result = 0;

    for (let i = 0; i <= len; i++) {
        result += (columnTitle.charCodeAt(len - i) - charBase) * Math.pow(26, i);
    }

    return result;

};
module.exports = {
    titleToNumber
}

const columnTitle = "A";
const columnTitle2 = "AB";
const columnTitle3 = "ZY";

console.log(titleToNumber(columnTitle));
console.log(titleToNumber(columnTitle2));
console.log(titleToNumber(columnTitle3));
