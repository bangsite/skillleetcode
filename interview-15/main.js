/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    let newS = s.split('').sort().join('');
    let newT = t.split('').sort().join('');

    console.log(newS);
    console.log(newT);
    return newS === newT;

};

// solution 2
const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;

    let freq = new Array(26).fill(0);
    console.log(freq);

    for (let i = 0; i < s.length; i++) {
        console.log('s.charCodeAt(i):::', s.charCodeAt(i));
        console.log('t.charCodeAt(i):::', t.charCodeAt(i));
        console.log(`a::: ${'a'.charCodeAt(0)}`);
        console.log(`minus s:::`,s.charCodeAt(i) - 'a'.charCodeAt(0));
        console.log(`minus t:::`,t.charCodeAt(i) - 'a'.charCodeAt(0));

        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        console.log('freq::::', freq)
    }
    console.log('result freq::::', freq)


    for (let i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) return false;
    }


    return true;

};


const s = "anagram", t = "nagaram",
    s2 = "rat", t2 = "car";

console.log(isAnagram(s, t));
console.log(isAnagram(s2, t2));

console.log(isAnagram2(s, t));
console.log(isAnagram2(s2, t2));
