const {containsDuplicate, containsDuplicate2, containsDuplicate3, containsDuplicate4} = require('./main');
const Benchmark = require('benchmark');

// Performance Test using Benchmark.js
const suite = new Benchmark.Suite();

const nums = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const nums4 = [0];

const largeMatrix = Array.from({length: 1000}, (_, i) =>
    Array.from({length: 1000}, (_, j) => i * 1000 + j + 1)
);

// Performance Test for containsDuplicate
console.time('contains duplicate small arr');
containsDuplicate(nums);
containsDuplicate(nums2);
containsDuplicate(nums3);
containsDuplicate(nums4);
console.timeEnd('contains duplicate small arr');

// Performance Test for containsDuplicate2
console.time('contains duplicate 2 small arr');
containsDuplicate2(nums);
containsDuplicate2(nums2);
containsDuplicate2(nums3);
containsDuplicate2(nums4);
console.timeEnd('contains duplicate 2 small arr');

// Performance Test for containsDuplicate3
console.time('contains duplicate 3 small arr');
containsDuplicate3(nums);
containsDuplicate3(nums2);
containsDuplicate3(nums3);
containsDuplicate3(nums4);
console.timeEnd('contains duplicate 3 small arr');

// Performance Test for containsDuplicate4
console.time('contains duplicate 4 small arr');
containsDuplicate4(nums);
containsDuplicate4(nums2);
containsDuplicate4(nums3);
containsDuplicate4(nums4);
console.timeEnd('contains duplicate 4 small arr');


console.time('contains duplicate large array');
containsDuplicate(largeMatrix);
console.timeEnd('contains duplicate large array');

console.time('contains duplicate 2 large array');
containsDuplicate2(largeMatrix);
console.timeEnd('contains duplicate 2 large array');

console.time('contains duplicate 3 large array');
containsDuplicate3(largeMatrix);
console.timeEnd('contains duplicate 3 large array');

console.time('contains duplicate 4 large array');
containsDuplicate4(largeMatrix);
console.timeEnd('contains duplicate 4 large array');

suite
    .add('containsDuplicate', function () {
        const nums = [1, 2, 3, 1];
        containsDuplicate(nums);
    })
    .add('containsDuplicate2', function () {
        const nums = [1, 2, 3, 1];
        containsDuplicate2(nums);
    })
    .add('containsDuplicate3', function () {
        const nums = [1, 2, 3, 1];
        containsDuplicate3(nums);
    })
    .add('containsDuplicate4', function () {
        const nums = [1, 2, 3, 1];
        containsDuplicate4(nums);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({async: true});
