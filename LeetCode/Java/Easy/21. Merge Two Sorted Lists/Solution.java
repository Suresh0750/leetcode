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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        
        if(list1==null) return list2;
        if(list2==null) return list1;
        ListNode head = new ListNode(list1.val);
        ListNode curr=head;
        while(list1!=null && list2!=null){
            int val = list1.val <list2.val ? list1.val : list2.val;
            ListNode node = new ListNode(val);
            curr.next = node;
            curr = curr.next;
            if(list1.val <list2.val){
                list1 = list1.next;
            }else{
                list2 = list2.next;
            }
        }
        if(list1!=null){
            curr.next = list1;
        }
        if(list2!=null){
            curr.next = list2;
        }
        return head.next;
    }
    
}