/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head==null) return head;
        head.next = helper( head.next,head.val);
        return head;
    }
    ListNode helper(ListNode node,int val){
        if(node==null) return node;
        if(node.next==null){
            if(node.val==val) return null;
            return node;
        }
        if(node.val==val){
            node = node.next;
        }else{
            val = node.val;
        }
      node.next =  helper(node.next,val);
        return node;
    }
}