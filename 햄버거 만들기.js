function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        //스택의 마지막 4개가 1,2,3,1인지 확인
        if (stack.length >= 4) {
            const len = stack.length;
            if(stack[len - 4] === 1 && stack[len - 3] === 2 &&
                stack[len - 2] === 3 && stack[len - 1] === 1) {
                stack.splice(len - 4, 4);
                answer++;
            }
        }
    }
    return answer;
}
