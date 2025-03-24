function solution(arr) {
    const answer = [0, 0];
    
    function compress(x, y, size) {
        const firstValue = arr[x][y];
        let isSame = true;
        
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== firstValue) {
                    isSame = false;
                    break;
                }
            }
            if (!isSame) break;
        }
        
        //반복문 통과
        if (isSame) {
            answer[firstValue]++;
        } else {
            const halfSize = size / 2;
            compress(x, y, halfSize);
            compress(x, y + halfSize, halfSize);
            compress(x + halfSize, y, halfSize);
            compress(x + halfSize, y + halfSize, halfSize);
        }
    }
    
    compress(0, 0, arr.length);
    
    return answer;
}
