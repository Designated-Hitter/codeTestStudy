function solution(X, Y) {
    const xCount = Array(10).fill(0);
    const yCount = Array(10).fill(0);
    
    //각 숫자의 등장 횟수 세기
    for (let ch of X) {
        xCount[Number(ch)]++;
    }
    for (let ch of Y) {
        yCount[Number(ch)]++;
    }
    
    let answer = '';
    
    //9부터 0까지 비교하여 공통된 개수만큼 answer에 추가
    for (let i = 9; i >= 0; i--) {
        const minCount = Math.min(xCount[i], yCount[i]);
        answer += String(i).repeat(minCount);
    }    
    
    if (answer === "") return "-1";
    if (answer[0] === "0") return "0";
    
    return answer;
}
