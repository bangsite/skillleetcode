## 2634. Filter Elements from Array
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

- arr[i] - number from the arr
- i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

### Example 1:

- Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
- Output: [20,30]
- Explanation:
````
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
````
### Example 2:

- Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
- Output: [1]
- Explanation:
    - fn can also accept the index of each element
    - In this case, the function removes elements not at index 0

## 2626. Array Reduce Transformation
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.


### Example 1:

- Input:
```javascript
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
```

- Output: 10
- Explanation:
```
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
```
### Example 2:

- Input:
```
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
```
- Output: 130
- Explanation:
````
initially, the value is init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
The final answer is 130.
````
## 2629. Function Composition

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

### Example 1:

- Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
- Output: 65
- Explanation:
```
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
```
