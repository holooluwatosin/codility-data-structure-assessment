The solution calculates the maximum number of direction changes (turns) encountered in a binary tree during a traversal from the root to the leaves. Here’s the approach I took:

### Approach

1. **Recursive Depth-First Search (DFS):**
   I implemented a helper function, `dfs`, to traverse the tree recursively. This function keeps track of three parameters:
   - The current node.
   - The direction of traversal (`goingRight`), which indicates whether the current direction is right (`true`), left (`false`), or the initial state (`null`).
   - The number of turns (`turns`) encountered so far.

2. **Handling Direction Changes:**
   - If `goingRight` is `null`, this means no direction has been set yet, so I can explore both the left and right subtrees without incrementing the turn count.
   - If the traversal continues in the same direction (left or right), I keep the current `turns` count unchanged.
   - If the traversal changes direction, I increment the `turns` count by 1 to reflect the turn.

3. **Base Case:**
   I included a base case where the recursion stops if the current node is `null`.

4. **Updating the Maximum Turns:**
   As the traversal progresses, I update a global variable `maxTurns` to store the maximum number of turns encountered during any path from the root to the leaves.

5. **Initializing the Traversal:**
   I started the DFS from the root node with `goingRight` set to `null` and `turns` initialized to 0.

### Complexity Analysis

- **Time Complexity:** The algorithm runs in \(O(N)\), where \(N\) is the total number of nodes in the binary tree, since every node is visited once.
- **Space Complexity:** The space complexity is \(O(H)\), where \(H\) is the height of the tree, as it represents the depth of the recursive call stack.

### Example Walkthrough

For a binary tree like this:

```
      1
     / \
    2   3
   /   / \
  4   5   6
```

The maximum turns occur along paths such as:
- `1 → 2 → 4` (0 turns).
- `1 → 3 → 5` or `1 → 3 → 6` (1 turn each).

The solution efficiently calculates this by exploring all paths and keeping track of turns for each.
