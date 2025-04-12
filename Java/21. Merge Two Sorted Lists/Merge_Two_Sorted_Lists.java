import java.util.LinkedList;
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
class Solution_21{
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode currentNode = new ListNode();
        while(list1.next != null && list2.next != null){
            int list1Value = list1.val;
            int list2Value = list2.val;
            if(list1Value <= list2Value){
                outputList.val = list1Value;
                list1.getNext();
            } else{
                outputList.val = list2Value;
                list2.getNext();
            }
            outputList.getNext();
        }
        System.out.println(outputList);
        return outputList;
    }
}