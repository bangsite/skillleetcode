/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
    // split string to array
    let arrayStr = s.split('');
    let countOfA = 0;
    let countOfL = 0;
    let maxOfL = 0;

    if (arrayStr && arrayStr.length) {
        arrayStr.forEach(item => {
            if (item === 'A') countOfA++;

            (item === 'L') ? countOfL++ : countOfL = 0;
            if (countOfL > maxOfL) maxOfL = countOfL;
        })
    }

    // check A fewer than 2 days &&  // check L for 3 or more consecutive days
    return countOfA < 2 && maxOfL < 3;

};
checkRecord("PPALLP");
checkRecord("PPALLL");
checkRecord("LALL");
