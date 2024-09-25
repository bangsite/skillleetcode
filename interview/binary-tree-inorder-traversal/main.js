/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Helper function to convert an array to a binary tree
 * @param {number[]} arr
 * @return {TreeNode}
 */
function arrayToTreeNode(arr) {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);

        }

        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);

        }
        i++;
    }
    return root;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    // initialize an empty to store the result
    const res = [];
    // initialize an empty stack for iterative traversal
    const stack = [];
    // loop until either the current node is not null or the stack is not empty
    while (root || stack.length > 0) {
        // Traverse to the leftmost node and push each encountered node onto the stack
        while (root) {
            stack.push(root);
            root = root.left;
        }
        // Pop the last node from the stack (most recently left-visited node)
        root = stack.pop();
        // Append the value of the popped node to the result array
        res.push(root.val);
        // Move to the right subtree to continue the in-order traversal
        root = root.right;
    }

    // Return the final result array
    return res;
};


module.exports = {inorderTraversal};


// const root = [1, null, 2, 3];
// const root2 = [];
// const root3 = [1];
const root = arrayToTreeNode([1, null, 2, 3]);
const root2 = arrayToTreeNode([]);
const root3 = arrayToTreeNode([1]);

console.log(inorderTraversal(root));
console.log(inorderTraversal(root2));
console.log(inorderTraversal(root3));

