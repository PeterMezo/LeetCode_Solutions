/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let k = 1
    let p1 = 1
    let p0 = 0

        for (let i = 0; i < nums.length; i++){

            //Rule: One lagging pointer starting from the beggining of the array. 
            //Compare elements with p1 and at the faster running i
            //If difference is found, insert the new element into p1
            //Move the tracking p0 to skip all previous elements in the array
            
            if (nums[p0] != nums[i]){
                nums[p1] = nums[i]
                p1++
                k++
                p0 = i
            }       
        }

    return k
};
