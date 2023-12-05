## 28. Find the Index of the First Occurrence in a String
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Example 1

- Input:

```
haystack = "sadbutsad", needle = "sad"
 ```

- Output:

```shell
0

```

- Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.

### Example 2

- Input:

```
haystack = "leetcode", needle = "leeto"
```

- Output:

```shell
-1
```

- Explanation:   "leeto" did not occur in "leetcode", so we return -1.


### Constraints
- 1 <= haystack.length, needle.length <= 104
- haystack and needle consist of only lowercase English characters.

Notes:

- If >= (Is greater than or equal to) else (<= : is less than or equal to ...);
- 10^2 = ten squared
- 10^3 = ten cubed
