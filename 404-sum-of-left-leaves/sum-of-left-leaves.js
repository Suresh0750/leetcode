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
var sumOfLeftLeaves = function(root) {
    
    let sum = 0

    let i =0

    function recursion(root){

        if(!root) return

        if(root?.left?.val){
            let checkRoot = root?.left
            if(!checkRoot.left && !checkRoot.right){
                console.log(root?.left?.val)
                sum += root?.left?.val
            }
        }
        if(root?.left) recursion(root?.left)
        if(root?.right) recursion(root?.right)

    }
    recursion(root)
    console.log(sum)
    return sum
};