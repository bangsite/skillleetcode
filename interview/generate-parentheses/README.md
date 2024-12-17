## 22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Example 1

- Input:

```
n = 3
```

- Output:

```
'('->'()'->'()('->'()()'->'()()('=>'()()()'
                ->'()(('->'()(()'=>'()(())'
   ->'(('->'(()'->'(()('->'(()()'=>'(())())'
                ->'(())'->'(())('=>'(())()'
         ->'((('=>'((()))'
["((()))","(()())","(())()","()(())","()()()"]
```

- Explanation:

### Example 2

- Input:

```
n = 1
```

- Output:

```
["()"]
```

- Explanation:

### Constraints

- 1 <= n <= 8

### Follow up:

If this function is called many times, how would you optimize it?

