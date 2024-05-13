/**
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
    if (head === null) return null;

    let ptr = head;
    let arr = [];

    while (ptr) {
        arr.push(ptr.val);
        ptr = ptr.next;
    }

    arr.sort((a, b) => a - b);
    console.log(arr)
    head = new ListNode(arr[0]);
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        temp.next = new ListNode(arr[i]);
        temp = temp.next;
    }
    console.log(head);
    return head;
};

const head = [4, 2, 1, 3],
    head2 = [-1, 5, 3, 4, 0],
    head3 = [];


console.log(sortList(new ListNode(head)))
console.log(sortList(new ListNode(head2)))
console.log(sortList(new ListNode(head3)))
