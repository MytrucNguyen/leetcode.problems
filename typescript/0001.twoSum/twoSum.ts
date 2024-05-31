function twoSum(nums: number[], target: number): number[] {
    // Create an empty hash/dictionary `numToIndex`
    let numToIndex = new Map<number, number>();

    // Loop through the array `nums` using index, `i`
    for(let i = 0; i < nums.length; i++){
        // Let `num` be the value of `nums[i]`
        let num = nums[i];
        // Calculate `complement` by doing `target - num`
        let complement = target - num;

        if(complement in numToIndex){
            return [numToIndex[complement], i]
        }

        // Otherwise, add `num` to `numToIndex` with the value of `i`
        numToIndex[num] = i;
    }
    
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]