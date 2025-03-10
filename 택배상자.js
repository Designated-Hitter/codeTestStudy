function solution(order) {
    let answer = 0;
    let loadNum = 1; //현재 컨테이너 벨트에서 처리할 상자 번호
    let stack = []; //보조 컨테이너 벨트 (스택)
    let index = 0; //order 배열을 순회할 index
    
    while (loadNum <= order.length) {
        if (loadNum === order[index]) {
            //컨테이너 벨트에서 직접 트럭으로 적재
            answer++;
            index++;
        } else if (stack.length > 0 && stack[stack.length - 1] === order[index]) {
            //보조 컨테이너 벨트에서 적재
            stack.pop();
            answer++;
            index++;
            continue;
        } else {
            //컨테이너 벨트에서 스택으로 이동
            stack.push(loadNum);
        }
        loadNum++;
    }
    
    //보조 컨테이너 벨트에 남은 상자 처리
    while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
        stack.pop();
        answer++;
        index++;
    }
    
    return answer;
}
