
 @param {number[]} nums1
 @param {number} m
 @param {number[]} nums2
 @param {number} n
 @return {void} Do not return anything, modify nums1 in-place instead.

var merge = function(nums1, m, nums2, n) {
    let pn1 = m-1;
    let pn2 = n-1;
    let pn3 = Math.floor((m+n)-1);
    let temp;

    for (let i = pn3; i>-1; i--){

    //Base case 1
    // If the pn1 pointer reaches the end of the nums1 array
    // Use the elements from the nums2 array
    if(pn1 < 0 && pn2 > -1) {
        nums1[i] = nums2[pn2]
        pn2--
    } 

    //Base case 1
    // If the pn2 pointer reaches the end of the nums2 array
    // Use the elements from the nums1 array
    if(pn2 < 0 && pn1 > -1) {
        nums1[i] = nums1[pn1]
        pn1--
    }

    //Logic:
    // Compare relevant elements from each array
    // Put the higher value to the end of the nums1 array
    // Decrease the relevant pointer
    if (pn1 > -1 && pn2 > -1){
        if (nums1[pn1] > nums2[pn2]){
            nums1[i] = nums1[pn1]
            pn1--
        } else {
            nums1[i] = nums2[pn2]
            pn2--
        }
    }
    }   
};
