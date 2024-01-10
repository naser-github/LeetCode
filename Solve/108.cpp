class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return setBST(nums, 0, nums.size()-1);
    }

    TreeNode* setBST(vector<int>& nums, int start, int end) {

        if (start>end){
            return NULL;
        }

        int mid = (start+end)/2;
        TreeNode* node = new TreeNode(nums[mid]);
            
        node->left = setBST(nums, start, mid-1);
        node->right = setBST(nums, mid+1, end);

        return node;
    }
};
