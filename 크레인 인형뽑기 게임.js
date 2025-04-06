function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    for (let m of moves) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][m - 1] !== 0) {
                stack.push(board[i][m - 1]);
                board[i][m - 1] = 0;
                break;
            }
        }
        
        let len = stack.length;
        if (len >= 2) {
            if (stack[len - 1] === stack[len - 2]) {
                answer = answer + 2;
                stack.pop();
                stack.pop();
            }
        }
    }

    return answer;
}
