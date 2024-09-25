/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    let result = '';

    for (let i = 0; i < t.length; i++) {
        console.log('s:::',s.indexOf(s[i], i+1))
        console.log('t:::',t.indexOf(t[i], i+1));
        if (s.indexOf(s[i], i+1) !== t.indexOf(t[i], i+1)) return false;
    }

    return true;
};


const s = "egg", t = "add",
    s2 = "foo", t2 = "bar",
    s3 = "paper", t3 = "title";


console.log(isIsomorphic(s, t));
console.log(isIsomorphic(s2, t2));
console.log(isIsomorphic(s3, t3));
