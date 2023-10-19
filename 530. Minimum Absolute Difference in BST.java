
//  * Definition for a binary tree node.
public class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
         this.val = val;
         this.left = left;
         this.right = right;
     }
 }

class Solution {
    public int getMinimumDifference(TreeNode root) {
       System.out.println(root);
       return 1;
    }

    public static void main(String args[]){
    System.out.println(getMinimumDifference(TreeNode([1,0,48,null,null,12,49])));
}
}
