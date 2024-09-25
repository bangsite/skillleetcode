/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
    constructor(val, pos) {
        this.val = val;
        this.next = pos;
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    if (head === null) return false;

    let slow = head;
    let fast = head.next;
    console.log(fast)
    console.log(fast.next)

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        console.log('slow:::', slow);
        console.log('next:::', fast);

        if (slow === fast) return true;
    }
    return false;

};


const head = new ListNode([3, 2, 0, -4], 1), pos = 1,
    head2 = new ListNode([1, 2], 0), pos2 = 0,
    head3 = new ListNode([1], -1), pos3 = -1;

console.log(hasCycle(head));
console.log(hasCycle(head2));
console.log(hasCycle(head3));
