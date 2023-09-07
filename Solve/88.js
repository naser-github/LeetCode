var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;


    while (m + n > i) {
        if (nums1[i] <= nums2[j]) {
            if (i < m) {
                i++;
            } else {
                nums1[i] = nums2[j];
                i++;
                j++;
            }
        } else {
            nums1[m + j] = nums1[i];
            nums1[i] = nums2[j];
            i++;
            j++;
        }

        console.log(nums1[i])
    }
};