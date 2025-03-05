function solution(cards) {
    let visited = new Array(cards.length).fill(false);
    let groupSizes = [];
    
    //임의의 상자에서 시작했을 때 그룹의 크기를 구하는 함수
    function findGroupSize(start) {
        let size = 0;
        let card = start;
        
        while (!visited[card - 1]) {
            visited[card - 1] = true;
            card = cards[card - 1];
            size++;
        }
        return size;
    }
    //모든 상자를 확인하며 그룹을 찾아 크기를 저장
    for (let i = 0; i < cards.length; i++) {
        if (!visited[i]) {
            groupSizes.push(findGroupSize(i + 1));
        }
    }
    //그룹크기를 내림차순 정렬
    groupSizes.sort((a, b) => b - a);
    
    //가장 큰 두 그룹을 선택하여 곱셈
    return groupSizes.length > 1 ? groupSizes[0] * groupSizes[1] : 0;
}
