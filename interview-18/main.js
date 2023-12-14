/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let numberHappy = [];
    if (n === 1) return true;

    while (n !== 1) {
        if (numberHappy.includes(n)) return false;
        numberHappy.push(n);
        n = n.toString().split('').map(i => i ** 2).reduce((acc, currentValue) => acc + currentValue, 0);
    }

    return true;
};

const isHappy2 = function (n) {
    let newNumber = new Set();
    if (n < 1) return false;


    while (n !== 1 && !newNumber.has(n)) {
        let numberHappy = 0;
        while (n > 0) {
            let num = n % 10;
            numberHappy += num * num;
            console.log(numberHappy)
            n = Math.floor(n / 10);
        }


        newNumber.add(numberHappy);
        n = numberHappy;
        console.log('n:::', n)
    }

    return n === 1;
};

const n = 19;
const n2 = 2;

console.log(isHappy(n));
console.log(isHappy(n2));
console.log(isHappy2(n));
console.log(isHappy2(n2));
