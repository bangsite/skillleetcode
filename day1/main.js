/**
 * @return {Function}
 */
const createHelloWorld = function () {
    return function (...args) {
        return 'Hello World'
    }
};

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
    return function () {
        return n++;
    };
};

/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
    return {
        toBe:(value)=>{
            if(value === val ) return true;
            else throw new Error("Not Equal") ;
        },
        notToBe:(value)=>{
            if(value !== val ) return true;
            else throw new Error("Equal") ;
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter2 = function(init) {
    let temp = init;

    return {
        increment: () => ++temp,
        reset: () => temp = init,
        decrement: () => --temp,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

createHelloWorld();
createCounter();
// expect(5).toBe(5);
// expect(5).notToBe(5);
const counter = createCounter2(5);
console.log(counter.increment()) //6
console.log(counter.reset()) //5
console.log(counter.decrement()) //4

