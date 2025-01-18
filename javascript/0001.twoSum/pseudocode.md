Problem:

1. We want two numbers to add up to the tareget.
2. We then return their indices.

Plan:

1. Create a hash table. So when we start looping through
   we can check if we have seen this number before.

PSEUDOCODE
function twoSum (nums, target)
step 1: hash table
map = empty hash table

    step 2: interate through array
    for i to 0 to length num

        step 3: get complement
        complement = target - nums[i]

        step 4: check to see if complement is in the hash map we created
        if complement exisit in map:
            return [map[complement], i]

        step 5: if complement is not then we add to it
        map[nums[i], i]

    step 6: if no solution is found
    return []
