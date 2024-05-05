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
var countNodes = function(root) {

    if(!root) return 0

   let  node = []
   node.push(root)
    let c = 0
    while(node.length){
        root = node.shift()
        c++
        if(root && root.left) node.push(root.left)

        if(root && root.right) node.push(root.right)

    }
    return c
};