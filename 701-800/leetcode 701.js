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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {

    if(!val) return 
    
    const node = new TreeNode(val)
    if(!root){
        root = node
        return root
    }
    let curr = root

    while(true){

        if(val<curr.val){

            if(!curr.left){
                curr.left = node
                return root
            }
            curr = curr.left
        }else{

            if(!curr.right){
                curr.right = node
                return root
            }
            curr = curr.right
        }
    }
    
};