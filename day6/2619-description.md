## 2619. Array Prototype Last

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.



### Example 1:

- Input: nums = [null, {}, 3]
- Output: 3
- Explanation: Calling nums.last() should return the last element: 3.

### Example 2:

- Input: arr = [1,9,6,3,2], size = 3
- Output: [[1,9,6],[3,2]]
- Explanation:  The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

### Example 3:

- Input: nums = []
- Output: -1
- Explanation: Because there are no elements, return -1.

### Constraints:

- arr is a valid JSON array
- 0 <= arr.length <= 1000
