function solution(T) {
  let maxZigzag = 0; // Variable to keep track of the maximum zigzag length

  /**
   * Recursive function to traverse the binary tree and calculate zigzag length.
   * @param {Object} node - Current node in the tree
   * @param {string|null} prevDir - Previous direction ('L' for left, 'R' for right, null for root)
   * @param {number} turns - Number of turns taken in the zigzag path so far
   */
  function traverse(node, prevDir, turns) {
    if (!node) return; // Base case: If the node is null, stop recursion

    // Update the maximum zigzag length if current path is longer
    maxZigzag = Math.max(maxZigzag, turns);

    // Move left: Increment turns if coming from the right, otherwise keep the same
    traverse(node.l, 'L', prevDir === 'R' ? turns + 1 : turns);

    // Move right: Increment turns if coming from the left, otherwise keep the same
    traverse(node.r, 'R', prevDir === 'L' ? turns + 1 : turns);
  }

  if (!T) return 0; // If the tree is empty, return 0

  traverse(T, null, 0); // Start traversal from the root with no previous direction

  return maxZigzag; // Return the maximum zigzag length found
}
