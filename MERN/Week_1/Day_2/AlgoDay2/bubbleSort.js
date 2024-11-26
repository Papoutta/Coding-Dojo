// We receive a list of numbers assuming there is no duplicates in it.
// First we loop through the data till the end of it.
// Then inside the loop we loop again to verify if the element of the data is larger than then one after it.
// If the number is larger then the one after, we swap their values.
// If not, we advance by 1 through the iteration and continue our verification.
// When the first iteration of the first loop is finished, we advance by one and continue our condition.


// T diagram 
const nums1 = [5,3,4,2,1];
// i = 0 
// j = 0
// nums1[0]>nums1[1] ? True
// mem = nums1[0]
// nums1[0]=nums1[1]
// nums1[1]=mem
// nums1 = [3,5,4,2,1]
// j = j+1

// i=0
// j=1
// nums1[1]>nums1[2] ? False
//j = j+1

// i=0
// j=2
// nums1[2]>nums1[3] ? True
// mem = nums1[2]
// nums1[2]=nums1[3]
// nums1[3]=mem
// nums1 = [3,5,2,4,1]
// j = j+1

// i=0
// j=3
// nums1[3]>nums1[4] ? True
// mem = nums1[3]
// nums1[3]=nums1[4]
// nums1[4]=mem
// nums1 = [3,5,2,1,4]

const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length-1; i++){
        let sorted = true
        for(let j = 0; j < nums.length-i-1; j++){
            if (nums[j]>nums[j+1]){
                let mem = nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=mem
                sorted = true
            }
        }
        if(!sorted){
            break
        }
    }
    return nums
}

console.log(bubbleSort([5,3,4,2,1]));
