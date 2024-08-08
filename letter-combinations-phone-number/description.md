## 17. Letter Combinations of a phone number

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.


### Example 1

- Input:

```
digits = "23"
```

- Output:

```shell
["ad","ae","af","bd","be","bf","cd","ce","cf"]

```
- Explanation: 
### Example 2

- Input:

```
digits = ""
```

- Output:

```shell
[]
```
- Explanation:The only possible triplet does not sum up to 0.
### Example 3

- Input:

```
digits = "2"
```

- Output:

```shell
["a","b","c"]
```
- Explanation

### Constraints
- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

Notes:
- If >= (Is greater than or equal to) else (<= : is less than or equal to ...);
- 10^2 = ten squared
- 10^3 = ten cubed
- 2^6 = two the power of  six

