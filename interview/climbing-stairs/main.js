/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    // let count = 1;
    // let step = 1;

    if (n < 2) return 1;
    let t1 = climbStairs(n - 1);
    let t2 = climbStairs(n - 2);

    return t1 + t2;
};

const climbStairs2 = function (n) {
    let step1 = 1;
    let step2 = 1;
    let steps = 0;

    if (n < 2) return 1;

    for (let i = 2; i <= n; i++) {
        steps = step1 + step2;
        step1 = step2;
        step2 = steps;
    }

    return steps;
};

module.exports={
    climbStairs,
    climbStairs2,
}
const n = 2;
const n2 = 3;
const n3 = 44;


console.log(climbStairs2(n));
console.log(climbStairs2(n2));
console.log(climbStairs(n3));

