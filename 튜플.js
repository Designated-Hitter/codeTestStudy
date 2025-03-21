function solution(s) {
    const answer = [];
    //문자열 파싱 및 배열화
    const parsed = JSON.parse(s.replace(/{/g, "[").replace(/}/g, ']'));
    //길이 기준으로 정렬 (짧은 원소가 먼저 반영)
    parsed.sort((a, b) => a.length - b.length);
    
    for (const arr of parsed) {
        for (const num of arr) {
            if (!answer.includes(num)) {
                answer.push(num)
            }
        }
    }
    return answer;
}
