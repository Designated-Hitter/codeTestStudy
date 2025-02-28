function solution(arr1, arr2) {
    let answer = [];
    const m = arr1.length;
    const n = arr1[0].length;
    const p = arr2[0].length;
    
    for (let i = 0; i < m ; i++) {
        let row = [];
        for (let k = 0; k < p ; k++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
               sum += arr1[i][j] * arr2[j][k];
            }
            row.push(sum);
        }
        answer.push(row);
    }
    return answer;
}
