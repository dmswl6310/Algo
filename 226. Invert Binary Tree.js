/**
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root==null) return null;
    let temp=root.right;
    root.right=root.left;
    root.left=temp;
    if(root.left) invertTree(root.left)
    if(root.right) invertTree(root.right)

    return root
};