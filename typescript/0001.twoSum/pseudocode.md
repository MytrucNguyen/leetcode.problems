# Pseudocode

1. Create an empty hash/dictionary `numToIndex`
2. Loop through the array `nums` using index, `i`
   - Let `num` be the value of `nums[i]`
   - Calculate `complement` by doing `target - num`
   - Otherwise, add `num` to `numToIndex` with the value of `i`
