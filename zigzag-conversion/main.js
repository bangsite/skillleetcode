/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    let idx = 0;
    let d = 1;
    const rows = new Array(numRows).fill().map(() => []);

    if (numRows === 1 || numRows >= s.length) return s;
    for (const char of s) {
        rows[idx].push(char);

        if (idx === 0) {
            d = 1;
        } else if (idx === numRows - 1) {
            d = -1;
        }

        idx += d;
    }

    for (let i = 0; i < rows.length; i++) {
        rows[i] = rows[i].join('');
    }
    console.log(rows);

    return rows.join('');
};

/**
 * Solution 2
 * @param s
 * @param numRows
 * @return {string}
 */
const convert2 = function (s, numRows) {
    const zigzag = [...new Array(numRows).keys()];
    zigzag.push(...zigzag.slice(1, -1).reverse())

    const rows = [...new Array(numRows).fill('')];

    for (let i = 0; i < s.length; i++) {
        let temp = zigzag[i % zigzag.length];
        rows[temp] += s[i];
    }
    // [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c))
    return rows.join('');
}
/**
 * Solution 3
 * @param s
 * @param numRows
 * @return {*|string}
 */
const convert3 = function (s, numRows) {
    if (numRows === 1) return s;

    let result = '';
    const n = s.length;
    const cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            result += s[j + i];

            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
                result += s[j + cycleLen - i];
            }
        }
    }
    return result;
}

module.exports = {
    convert, convert2, convert3,
}

const s = 'PAYPALISHIRING', numRows = 3;
const s2 = 'PAYPALISHIRING', numRows2 = 4;
const s3 = 'A', numRows3 = 1;
const s4 = 'AB', numRows4 = 1;

console.log(convert3(s, numRows));
console.log(convert3(s2, numRows2));
console.log(convert3(s3, numRows3));
console.log(convert3(s4, numRows4));
