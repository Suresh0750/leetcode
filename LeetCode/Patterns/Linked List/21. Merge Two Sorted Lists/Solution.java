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
        ListNode node = list1;
        ListNode head = node;
        while(list1!=null && list2!=null){
            ListNode smallNode = list1.val <list2.val ? list1 ? list2;
            node.next = smallNode;
            node = node.next;
            if(list1.val <list2.val){
                list1 = list1.next;
            }else{
                list2 = list2.next;
            }
        }
        if(list1!=null){
            node.next = list1;
        }
        if(list2!=null){
            node.next = list2;
        }
        return head.next;
    }
    
}