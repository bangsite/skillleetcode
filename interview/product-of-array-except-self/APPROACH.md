### Approach

```shell
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

In this case,

```shell
At index 0, 24 is consisted of 2 * 3 * 4
At index 1, 12 is consisted of 1 * 3 * 4
At index 2, 8 is consisted of 1 * 2 * 4
At index 3, 6 is consisted of 1 * 2 * 3
```

Let's think about 24. To make 24, we need index 1, 2 and 3. Seems like if we iterate through from the end, we can easily
create 24, because the three numbers are next to each other without a skip.

```shell
[1,2,3,4] (= start from index 3)
       ↑
output = 4

[1,2,3,4] (= start from index 3)
     ↑
output = 12

[1,2,3,4] (= start from index 3)
   ↑
output = 24
```

Let's think about 12. we need index 0, 2 and 3. In this case, seems like we can easily get index 0 from beginning, and we can easily get index 2 and 3 from the end, because the two numbers are next to each other without a skip.

```shell
[1,2,3,4] (= start from index 0)
 ↑
output = 1

[1,2,3,4] (= start from index 3)
       ↑
output = 4

[1,2,3,4] (= start from index 3)
     ↑
output = 12
```

We have the same reason for 8 and 6.

```shell
[1,2,3,4] (= start from index 0)
 ↑
output = 1

[1,2,3,4] (= start from index 0)
   ↑
output = 2

[1,2,3,4] (= start from index 3)
       ↑
output = 8
```

```shell
[1,2,3,4] (= start from index 0)
 ↑
output = 1

[1,2,3,4] (= start from index 0)
   ↑
output = 2

[1,2,3,4] (= start from index 0)
     ↑
output = 6
```

⭐️ Points

Based on the example above, it seems that by looping twice, once from the left and once from the right, the calculation
can be simplified. The sum of the numbers to the left of an index can be calculated during the left-to-right loop, and
the sum of the numbers to the right can be calculated during the right-to-left loop. This way, it seems possible to
perform the calculation without skipping over the current index.

Let's see how it works!

```shell
[1,2,3,4]

output = [1,1,1,1]
left = 1
```

We initialize `output` with `1` because `1` doesn't affect a result of multiplication. `left` is a total of
multiplication on the left side.

First of all, multiply the `left` number to index `0. (= 1 * 1)`
Then multiply index `0` to `left(= 1 * 1)`, **because at index `1`, index `0` is one of left numbers.** In the end,

```shell
nums = [1,2,3,4]
        ↑
output = [1,1,1,1]
left = 1
```

Next, we multiply left to index 1.(= 1 * 1)
Then multiply index 1 in nums to left (= 2 * 1) for the same reason above, In the end

```shell
nums = [1,2,3,4]
          ↑
output = [1,1,1,1]
left = 2
```

Next, we multiply left to index 2.(= 1 * 2)
Then multiply index 2 in nums to left (= 2 * 3) for the same reason above, In the end

```shell
nums = [1,2,3,4]
            ↑
output = [1,1,2,1]
left = 6
```

Next, we multiply left to index 3.(= 1 * 6)
Then multiply index 3 in nums to left (= 6 * 4) for the same reason above, In the end

```shell
nums = [1,2,3,4]
              ↑
output = [1,1,2,6]
left = 24
```

Then Finish left-to-right loop. Let's think about what index number we use at each index.

```shell
output = [1,1,2,6]
            0 0 0
              1 1
                2
```

At index 3, we successfully create 6 that is consisted of index 0, 1 and 2. It's one of outputs.

Let's start right-to-left loop. We will do the same thing from right to left.

```shell
nums = [1,2,3,4]
              ↑
output = [1,1,2,6]
right = 1
```

First of all, multiply right to index 3. Nothing will happen because right number is now 1.

Then multiply index 3 in nums to right.

```shell
nums = [1,2,3,4]
              ↑
output = [1,1,2,6]
right = 4
```

Next, first of all multiply right to index 2.

```shell
nums = [1,2,3,4]
            ↑
output = [1,1,8,6]
right = 4
```

Let's think about what index number we use for index 2.

```shell
output = [1,1,2,6]
            0 0 0
              1 1
                2
```

right number 4 is coming from index 3, and we multiplied 4 to index 2. That means we use index 0, 1 and 3 for index 2.
Looks good.

```shell
output = [1,1,8,6]
            0 0 0
              1 1
              3 2
```

Let's continue. Don't forget to multiply 3 to right which is now 12.

At first, we multiply right to index 1 in output. Then multiply 2 in nums to right.

```shell
nums = [1,2,3,4]
          ↑
output = [1,12,8,6]
right = 12
```

Now, 12 is coming from index 2 and 3 in nums.

```shell
output = [1,12,8,6]
            0  0 0
            2  1 1
            3  3 2
```

Before we multiply the right number, don't forget to multiply index 1 in nums to the right number.

```shell
nums = [1,2,3,4]
        ↑
output = [1,12,8,6]
right = 24
```

Then multiply 24 to index 0.

```shell
nums = [1,2,3,4]
        ↑
output = [24,12,8,6]
right = 24
```

Let's think about what index numbers we use for index 0. 24 is consisted of index 1, 2 and 3.

```shell
output = [24,12,8,6]
          1  0  0 0
          2  2  1 1
          3  3  3 2
```

We finish right-to-left loop.

```shell
output = [24,12,8,6]
          1  0  0 0
          2  2  1 1
          3  3  3 2

At index 0, we don't use index 0.
At index 1, we don't use index 1.
At index 2, we don't use index 2.
At index 3, we don't use index 3.
```

Looks good!

```shell
return [24,12,8,6] (= output)

```
