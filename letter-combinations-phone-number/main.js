/**
 * @param {string} digits
 * @return {string[]}
 */

// const numberPhoneArr = new Map([
//     ['1', []],
//     ['2', ['a', 'b', 'c']],
//     ['3', ['d', 'e', 'f']],
//     ['4', ['g', 'h', 'i']],
//     ['5', ['j', 'k', 'l']],
//     ['6', ['m', 'n', 'o']],
//     ['7', ['p', 'q', 'r', 's']],
//     ['8', ['t', 'u', 'v']],
//     ['9', ['w', 'x', 'y', 'z']],]
// )
//
// const letterCombinations = function (digits) {
//     const mapLetter = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
//     let result = [];
//
//     if (!digits || digits.length === 0) return [];
//
//     const goStep = (i, s) => {
//         if (i === digits.length) {
//             result.push(s); return;
//         }
//
//         for (const letter of mapLetter[digits[i]]) {
//             goStep(i + 1, s + letter)
//         }
//     }
//
//     goStep(0, '');
//
//     return result;
// };
//
// const digits = "23",
//     digits2 = "",
//     digits3 = "2",
// digits4 = "234";
//
// console.log(letterCombinations(digits));
// console.log(letterCombinations(digits2));
// console.log(letterCombinations(digits3));
// console.log(letterCombinations(digits4));


class Account {
    private balance = 0;
    private amount = 0;


    constructor(balance,amount) {
        this.balance = balance;
        this.amount = amount;
    }

    getBalance() {
        return  this.balance;
    }

    debit(amount) {
        return amount > this.balance
    }

    credit(amount) {
        return amount;
    }
}
