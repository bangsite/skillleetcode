## 06. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
```shell
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


### Example 1

- Input:

```
s = "PAYPALISHIRING", numRows = 3
```

- Output:

```shell
"PAHNAPLSIIGYIR"

```
- Explanation:
### Example 2

- Input:

```
s = "PAYPALISHIRING", numRows = 4
```

- Output:

```shell
"PINALSIGYAHRPI"
```

- Explanation:
```shell
P     I    N
A   L S  I G
Y A   H R
P     I
```
### Example 3

- Input:

```
s = "A", numRows = 1
```

- Output:

```shell
A
```
- Explanation:

### Constraints
- 1 <= s.length <= 1000
- s consists of English letters (lower-case and upper-case), ',' and '.'.
- 1 <= numRows <= 1000

### Follow-up: 


### Notes:
- If >= (Is greater than or equal to) else (<= : is less than or equal to ...);
- 10^2 = ten squared
- 10^3 = ten cubed
- 2^6 = two the power of  six
