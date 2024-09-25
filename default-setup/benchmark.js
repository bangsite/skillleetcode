const Benchmark = require('benchmark');
const {funcName} = require('./main');

// Performance Test using Benchmark.js
const suite = new Benchmark.Suite();

// Setup data
const largeArray = Array.from({length: 1000}, (_, i) => i * 1000);

suite
    .add('func', function () {
        funcName(largeArray);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({async: true});
