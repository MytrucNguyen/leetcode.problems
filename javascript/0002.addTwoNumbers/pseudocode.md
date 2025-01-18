Problem:

- Given a linked list in reverse order

1. Add two numbers together
2. Return the sum of the linked list

Plan:
Add two numbers stored in two linled list.

1. Start from the leftmost digit of both lists
2. Add two digits and keeping track of any carry
3. Store the results in a new linked list

```
PSEUDOCODE

function addTwoNumbers (l1, l2)
    step 1: create dummy node to start the result list
    step 2: create a poiner to track the current node in the results
    step 3: set carry to 0

    while l1 is not empty or l2 is not empty or carry is not 0:
        get value from l1
        get value from l2

        add two values and the carry
        calculate the new carry
        calculate the digit to store in current node

        crate a new node with digit and link it to the results
        move the current pointer to new node

        move l1 to next node
        move l2 to next node

    return results
```

<hr/>

Things to know:

What are linked lists?
Its a chain of boxes. Each box has 1. value 2. a pointer to the next box in the chain

```
l1=[2,4,3]

box 1: 2 -> box 2: 4 -> box 3: 3 -> null
```
