### Description

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

Viết hàm createHelloWorld. Nó sẽ trả về một hàm mới luôn trả về "Hello World".


### Example 1:

- Input: args = []
- Output: "Hello World"
- Explanation:
    ````
    const f = createHelloWorld();
    f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

### Example 2:

- Input: args = [{},null,42]
- Output: "Hello World"
- Explanation:
    ````
    const f = createHelloWorld();
    f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".


### Constraints:

1 <= s.length <= 1000
s[i] is either 'A', 'L', or 'P'.
