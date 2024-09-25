/**
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    let head = new ListNode();
    let current = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        console.log(current.next)
        console.log(head.next)
        current = current.next;
    }
    current.next = list1 || list2;
    return head.next;
};

//Case 1
const list1 = [1, 2, 4], list2 = [1, 3, 4];
//Case 2
const list11 = [], list22 = [];
//Case 3
const list111 = [], list222 = [0];

console.log(mergeTwoLists(new ListNode(list1), new ListNode(list2)))
console.log(mergeTwoLists(new ListNode(list11), new ListNode(list22)))
console.log(mergeTwoLists(new ListNode(list111), new ListNode(list222)))
