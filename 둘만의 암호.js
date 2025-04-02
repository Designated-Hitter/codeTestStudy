function solution(s, skip, index) {
    let answer = '';
    const skipSet = new Set(skip);
    
    for (let char of s) {
        let count = 0;
        let currentChar = char;
        
        while (count < index) {
            currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
            
            //z를 넘어가면 a로 되돌리기
            if (currentChar > 'z') {
                currentChar = 'a';
            }
            
            //skip에 포함되지 않는 문자만 카운트 증가
            if(!skipSet.has(currentChar)) {
                count++;
            }
        }
        answer += currentChar;
    }
    
    return answer;
}
