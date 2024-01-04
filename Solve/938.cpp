/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        return preOrderTraverse(root, 0, low, high);
    }

    int preOrderTraverse(TreeNode* node, int sum ,int low, int high){
        if (node == NULL){
            return sum;
        }

        sum = preOrderTraverse(node->left, sum, low, high);
        
        sum = preOrderTraverse(node->right, sum, low, high);

        if(node->val>=low && node->val<=high){
            return sum + node->val;
        }

        return sum;
    }
};
