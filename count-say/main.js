/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    let start = '1';

    while (--n) {
        let tmp = "";
        let frequency = 1;

        for (let i = 0; i < start.length; i++) {
            if (start[i] !== start[i + 1]) {
                tmp += `${frequency}${start[i]}`;
                frequency = 1;
            } else {
                frequency += 1;
            }
        }
        start = tmp;
    }

    return start;

};

module.exports={
    countAndSay
}

const n = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;


console.log(countAndSay(n));
console.log(countAndSay(n2));
console.log(countAndSay(n3));
console.log(countAndSay(n4));
console.log(countAndSay(n5));
console.log(countAndSay(n6));
