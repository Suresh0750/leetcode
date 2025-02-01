/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    const fetchLeafeNode = (node,arr)=>{
            if(!node.left && !node.right){
                arr?.push(node.val)
            }
            if(node.left){
                arr = fetchLeafeNode(node.left,arr)
            }
            if(node.right){
                arr = fetchLeafeNode(node.right,arr)
            }
            return arr
    }

   
    let root1LeafNodes =  fetchLeafeNode(root1,[])
    let root2LeafNodes = fetchLeafeNode(root2,[])

    return root1LeafNodes.length==root2LeafNodes.length && root1LeafNodes.every((val,ind)=>val==root2LeafNodes[ind])

};