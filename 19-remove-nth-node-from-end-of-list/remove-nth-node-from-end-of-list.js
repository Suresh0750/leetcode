/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = []
    let curr ;

    while(head){
        curr = head.next
       head.next = null
        arr.push(head)
        head = curr
    }
    console.log(arr)
    let i =0

    head = new ListNode(0)
    curr = head
    while(i<arr.length){
        if(i==(arr.length-n)) {
            i++
            continue;
        }else{
            console.log(arr[i].val)
            head.next = new ListNode(arr[i].val)
            head = head.next
        }
        i++
    }
    console.log(head)
    return curr.next
};