/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */


class Solution {
public:
    ListNode* reverseList(ListNode* head) {

        ListNode* reverse = NULL;

        while (head != NULL){
            cout << head->val << " ";

            ListNode* newnode = new ListNode(head->val, reverse);
            reverse = newnode;
            
            head = head->next;
        }

        return reverse;
    }
};