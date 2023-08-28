class Solution {
    public:
        int getDecimalValue(ListNode* head) {
    
            string binary;
    
            while (head != NULL){
                binary = binary + to_string(head->val);
                head = head->next;
            }
    
            return stoi(binary, 0, 2);
        }
    };