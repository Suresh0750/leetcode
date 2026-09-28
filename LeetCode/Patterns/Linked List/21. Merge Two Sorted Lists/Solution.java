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
        ListNode node =  mergeTwoLists(list1.next,list2.next);
        boolean isList1First = list1.val<=list2.val;
        if(isList1First){
            list1.next = list2;
            ListNode currentLastNode = list1.next;
            currentLastNode.next = node;
        }else{
            list2.next = list1;
             ListNode currentLastNode = list2.next; 
             currentLastNode.next = node;
        }
       
        
        
        return isList1First ? list1 : list2;
    }
    
}