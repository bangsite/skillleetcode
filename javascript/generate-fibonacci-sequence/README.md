## 2648. Generate Fibonacci Sequence

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

### Example 1

- Input:

```javascript
callCount = 5
```

- Output:

```javascript
[0, 1, 1, 2, 3]
```

- Explanation:

```javascript
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
```

### Example 2

- Input:

```
callCount = 0
```

- Output:

```
[]
```

- Explanation:gen.next() is never called so nothing is outputted

### Constraints

- 0 <= callCount <= 50

### Follow up:

### Notes

> The function* declaration creates a binding of a new generator function to a given name. A generator function can be
> exited and later re-entered, with its context (variable bindings) saved across re-entrances.

> Có thể hiểu rằng nó là một function có thể được thực thi nhiều lần liên tiếp mà ngữ cảnh (số lượng biến, giá trị biến,
> trạng thái các thành phần bên trong hàm ...) đều có thể lưu lại sử dụng sau mỗi lân gọi lại hàm.

> [Generate Fibonacci Sequence](https://leetcode.com/problems/generate-fibonacci-sequence/editorial/)
