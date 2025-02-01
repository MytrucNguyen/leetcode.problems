# Problem

We have a flowerbed represented as an array where:

- `1` means the plot is occupied.
- `0` means the plot is empty.

We need to check if we can plant `n` flowers while following these rules:

1. Flowers **cannot** be planted in adjacent plots.
2. We can only plant in `0` spaces.

Return `true` if we can plant `n` flowers, otherwise `false`.

---

# Plan

1. **Handle the edge case where `n = 0`**

   - If `n` is `0`, return `true` immediately since we don't need to plant any flowers.

2. **Iterate through the flowerbed:**

   - If the plot is already occupied (`1`), skip it.

3. **Check if a flower can be planted:**

   - Ensure both the left and right positions are empty (`0` or out of bounds).
   - If so, plant a flower (`flowerbed[i] = 1`), decrement `n`, and **skip the next plot**.

4. **Return the result:**
   - If `n` reaches `0`, return `true`.
   - If we finish iterating and `n > 0`, return `false`.

# Pseudocode

FUNCTION canPlaceFlowers(flowerbed, n):  
 IF n is 0:  
 RETURN true // No flowers need to be planted

       totalPlots = LENGTH of flowerbed

       FOR i FROM 0 TO totalPlots - 1:
           IF flowerbed[i] is 1:
               CONTINUE  // Skip occupied plots

           isLeftEmpty = (i is 0 OR flowerbed[i - 1] is 0)
           isRightEmpty = (i is last index OR flowerbed[i + 1] is 0)

           IF isLeftEmpty AND isRightEmpty:
               SET flowerbed[i] to 1  // Mark plot as occupied
               DECREASE n BY 1

               IF n is 0:
                   RETURN true

               INCREMENT i TO SKIP NEXT PLOT  // Avoid adjacent planting

       RETURN n is 0  // If n > 0, return false

# Big O Notation Analysis

### Time Complexity: `O(n)` → Linear Time

- We iterate through the `flowerbed` array once, checking each position.

### Space Complexity: `O(1)` → Constant Space

- We modify the `flowerbed` in place without extra memory.

# Why This is the Most Optimal Solution

1. **Early exit for `n = 0`:**

   - Avoids unnecessary processing when no flowers need to be planted.

2. **Minimizes unnecessary checks:**

   - Uses `continue` to skip occupied plots immediately.

3. **Avoids deep nesting:**

   - Reduces complexity by checking conditions early.

4. **Efficient and simple:**
   - Iterates once and modifies `flowerbed` in place.
