const Benchmark = require('benchmark');
const {reverseString,reverseString2,reverseString3} = require('./main');

// Performance Test using Benchmark.js
const suite = new Benchmark.Suite();

// Setup data
const largeArray = Array.from({ length: 1000 }, (_, i) => `char${i}`); // Create an array of 1000 elements
console.log(largeArray);

suite
    .add('reverseString', function () {
        const arrCopy = [...largeArray]; // Copy to ensure the original is not modified
        reverseString(arrCopy);
    })
    .add('reverseString2', function () {
        const arrCopy = [...largeArray]; // Copy to ensure the original is not modified
        reverseString2(arrCopy);
    })
    .add('reverseString3', function () {
        const arrCopy = [...largeArray]; // Copy to ensure the original is not modified
        reverseString3(arrCopy);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({async: true});
