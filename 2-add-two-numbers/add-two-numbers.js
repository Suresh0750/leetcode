/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    // function reverseVal(node){

    //     let val = []

    //     let i = 0

    //     while(node){
    //         val.push(node.val)
    //         node = node.next
    //     }
    //     console.log(val.reverse('').join(''))
    //     return val.reverse('').join('')
    //     // i = val.length-1
    //     // let result = ''

    //     // while(i>=0){
    //     //     result+=val[i]
    //     //     i--
    //     // }

    //     // return result
    // }
    // let val1 = +(reverseVal(l1)) ; 
    // let val2 = +(reverseVal(l2))
    // let newNode = (val1+val2)+''

    // newNode = newNode.split('').reverse('')
    // console.log(newNode)
    // let node = new ListNode()
    // let returnNode = node
    // newNode.map((val)=>{
    //     node.next =  new ListNode(val)
    //     node = node.next
    // })
    // return returnNode.next
    let node = new ListNode(0)
    let curr = node
    let bal = 0
    while(l1 || l2){
        let val = (l1.val || 0)+(l2.val || 0)+bal
        if((val+'').length==1){
            node.next = new ListNode(val)
            bal = 0
        }else{
            bal = Math.floor(10/10)
            val = val%10
            node.next = new ListNode(val)
        }
        l1 = l1?.next || 0
        l2 = l2?.next || 0
        node = node.next
    }
    console.log(bal)
    if(bal){
      node.next =  new ListNode(bal)
    }
    return curr.next
};