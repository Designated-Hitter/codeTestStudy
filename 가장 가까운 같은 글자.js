function solution(s) {
    let answer = [];
    let lastIndex = {};
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in lastIndex) {
            answer.push(i - lastIndex[s[i]]);
        } else {
            answer.push(-1);
        }
        lastIndex[s[i]] = i;
    }
    return answer;
}
