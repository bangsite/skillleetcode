## 205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Bài toán kiểm tra xem chuỗi s có thể ánh xạ 1 chiều với chuỗi t ko ?
- p <-> t
- a <-> i
- e <-> l
- r <-> e

### Example 1

- Input:

```
s = "egg", t = "add"
```

- Output:

```shell
true

```

### Example 2

- Input:

```
s = "foo", t = "bar"
```

- Output:

```shell
false
```


### Example 3

- Input:

```
s = "paper", t = "title"
```

- Output:

```shell
true
```


### Constraints
- 1 <= s.length <= 5 * 104
- t.length == s.length
- s and t consist of any valid ascii character.

Notes:

- If >= (Is greater than or equal to) else (<= : is less than or equal to ...);
- 10^2 = ten squared
- 10^3 = ten cubed
