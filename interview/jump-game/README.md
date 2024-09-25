## 55. Jump Game

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.



### Example 1

- Input:

```
 nums = [2,3,1,1,4]
```

- Output:

```shell
true
```

- Explanation: 
```shell
Jump 1 step from index 0 to 1, then 3 steps to the last index.
```
### Example 2

- Input:

```
nums = [3,2,1,0,4]

```

- Output:

```shell
false

```
- Explanation: 
```shell
You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 
```


### Constraints
- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^5

  
Notes:

- If >= (Is greater than or equal to) else (<= : is less than or equal to ...);
- 10^2 = ten squared
- 10^3 = ten cubed
- 6^5 = six to the power of five
