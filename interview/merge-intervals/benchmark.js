const {rotate, rotate2} = require('./main');
const Benchmark = require('benchmark');

// Performance Test using Benchmark.js
const suite = new Benchmark.Suite();

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

const largeMatrix = Array.from({ length: 1000 }, (_, i) =>
    Array.from({ length: 1000 }, (_, j) => i * 1000 + j + 1)
);

// Performance Test for rotate
console.time('rotate small matrix');
rotate([...matrix1.map(row => [...row])]);  // clone the matrix to avoid modification
rotate([...matrix2.map(row => [...row])]);
console.timeEnd('rotate small matrix');

// Performance Test for rotate2
console.time('rotate2 small matrix');
rotate2([...matrix1.map(row => [...row])]);  // clone the matrix to avoid modification
rotate2([...matrix2.map(row => [...row])]);
console.timeEnd('rotate2 small matrix');


console.time('rotate large matrix');
rotate([...largeMatrix.map(row => [...row])]);
console.timeEnd('rotate large matrix');


console.time('rotate2 large matrix');
rotate2([...largeMatrix.map(row => [...row])]);
console.timeEnd('rotate2 large matrix');


suite
    .add('rotate', function () {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        rotate(matrix);
    })
    .add('rotate2', function () {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        rotate2(matrix);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: true });
