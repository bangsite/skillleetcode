/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
    let newCitationsSort = citations.sort((a,b)=>a-b);
    console.log(newCitationsSort)
    let h = 0;
    let N = newCitationsSort.length;

    for (let i = 0; i < newCitationsSort.length; i++) {
        let hMin = Math.min(newCitationsSort[i], N - i);
        console.log('hMin:::',hMin)
        h = Math.max(h, hMin);
        console.log('hMax',h)
    }

    console.log(h)
    return h;
};

const citations = [3, 0, 6, 1, 5],
    citations2 = [1, 3, 1],
    citations3 = [6, 6, 4, 8, 4, 3, 3, 10];

// console.log(hIndex(citations));
// console.log(hIndex(citations2));
console.log(hIndex(citations3));
