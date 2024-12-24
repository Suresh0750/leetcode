/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    function dfsRecursive(BTree){
        if(!BTree) return 0
        
        return 1+Math.max(dfsRecursive(BTree.left),dfsRecursive(BTree.right))
    }
    return dfsRecursive(root)
};