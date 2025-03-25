function solution(number, limit, power) {
    let answer = 0;
    
    function getDivisor (num) {
        let count = 0;
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                count++; //i는 num의 약수
                if (i !== num / i) {
                    count++; //i와 num/i가 다르면 추가
                }
            } 
        }
        return count;
    }
    for (let j = 1; j <= number; j++) {
        let divisorCount = getDivisor(j);
        answer += divisorCount > limit ? power : divisorCount;
    }
    return answer;
}
