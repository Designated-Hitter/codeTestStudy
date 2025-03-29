function solution(N, stages) {

    let stageCounts = new Array(N + 2).fill(0);
    
    //각 스테이지에 멈춰있는 플레이어 카운트
    for (let stage of stages) {
        stageCounts[stage]++;
    }
    
    let totalPlayers = stages.length;
    let failureRates = [];
    
    for (let i = 1; i <= N; i++) {
        if (totalPlayers === 0) {
            failureRates.push([i, 0]);
        } else {
            let failureRate = stageCounts[i] / totalPlayers;
            failureRates.push([i, failureRate]);
            totalPlayers -= stageCounts[i];
        }
    }
    //실패율이 높은 순서대로 정렬, 실패율이 같다면 스테이지 번호가 낮은 순으로 정렬
    failureRates.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    return failureRates.map(stage => stage[0]);
}
