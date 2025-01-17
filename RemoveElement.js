/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/*LEETCODE JUDGE------------------------------

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

*/

var removeElement = function(nums, val) {
    let p1 = 0
    let p2 = nums.length - 1
    let temp
    let k = 0

    for (let i = p1; i < nums.length; i++) {
    //Rule 1: if the p1 starting from the beginning of nums is equal to the searched value
    //Switch the value at p1 and p2, which starts at the end of the array
    //If a switch happened, only move p2 a step closer to the middle
        if (nums[p1] == val) {
            temp = nums[p2]
            nums[p2] = nums[p1]
            nums[p1] = temp
            p2--
    //Rule 2: if the element at p1 is not our searched vaue, move p1 one stp closer to the center
        } else {
            p1++
            k++
        }
    //Rule 3: If the pointers pass each other, the array has been sorted, no need to do more calculations
        if  (p1 > p2){
            break;
        }
    }
    
    return k
};
