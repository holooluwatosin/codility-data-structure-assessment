function solution(T) {
    if (!T) return 0;
    
    let maxTurns = 0;
    
    // goingRight: null = first move, true = going right, false = going left
    function dfs(node, goingRight, turns) {
        if (!node) return;
        
        // Update max turns seen so far
        maxTurns = Math.max(maxTurns, turns);
        
        if (goingRight === null) {
            // First move - can go either direction without counting as turn
            dfs(node.l, false, 0);
            dfs(node.r, true, 0);
        } else if (goingRight) {
            // Currently going right
            // Can turn left (counts as turn)
            dfs(node.l, false, turns + 1);
            // Or continue right (resets path)
            dfs(node.r, true, 0);
        } else {
            // Currently going left
            // Can turn right (counts as turn)
            dfs(node.r, true, turns + 1);
            // Or continue left (resets path)
            dfs(node.l, false, 0);
        }
    }
    
    // Start the traversal from root
    dfs(T, null, 0);
    
    return maxTurns;
}