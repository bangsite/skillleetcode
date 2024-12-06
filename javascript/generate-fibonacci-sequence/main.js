/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
    let curr = 0;
    let next = 1;

    while (true) {
        yield curr;

        [curr, next] = [next, curr + next]
    }
};

/**
 * Use closure
 * @return {Generator<number>}
 */
const fibGenerator2 = () => {
    let curr = 0;
    let next = 1;

    return () => {
        let result = curr;
        [curr, next] = [next, curr + next];

        return result;
    }
};

/**
 * Use recursive
 * @return {Generator<number>}
 */
function* fibGenerator3(current = 0, next = 1) {
    yield current;
    yield* fibGenerator3(next, current + next);

}

/**
 * Without use function
 * @return {Generator<number>}
 */
const fibGenerator4 = {
    current: 0, next: 1, nextNumber: function () {
        const result = this.current;
        [this.current, this.next] = [this.next, this.current + this.next];

        return result;
    }

};

/**
 * Yield* test
 * @return {Generator<number>}
 */
function* test() {
    yield 3;
    yield 5;
}

function* yieldTest() {
    yield* [1, 2];
    yield* '56';
    yield* Array.from(arguments);
    yield* test();
}


const callCount = 5, callCount1 = 0;
const gen = fibGenerator(callCount);
const gen1 = fibGenerator(callCount1);
const gen2 = fibGenerator2();
const gen3 = fibGenerator3();
const yTest = yieldTest(9,99);

// Test fibGenerator
console.log('------fibGenerator-------');
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log('------fibGenerator-------');
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

// Test fibGenerator2
console.log('------fibGenerator2-------');
console.log(gen2());
console.log(gen2());
console.log(gen2());
console.log(gen2());
console.log(gen2());
console.log(gen2());


console.log('------fibGenerator3-------');
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());

console.log('------fibGenerator4-------');
console.log(fibGenerator4.nextNumber());
console.log(fibGenerator4.nextNumber());
console.log(fibGenerator4.nextNumber());
console.log(fibGenerator4.nextNumber());
console.log(fibGenerator4.nextNumber());



console.log('------yieldTest-------');
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
console.log(yTest.next());
