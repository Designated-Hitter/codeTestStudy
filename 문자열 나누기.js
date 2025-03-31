function solution(s) {
    let answer = 0;
    let arrayS = s.split("")
    
    while (arrayS.length > 0) {
        let x = arrayS[0];
        let xLength = 0;
        let notXLength = 0;
        
        for (let i = 0; i < arrayS.length; i++) {
            if (arrayS[i] === x) {
                xLength++;
            } else {
                notXLength++;
            }
            
            if (xLength === notXLength) {
                answer++;
                //현재까지 읽은 부분 삭제
                arrayS.splice(0, i + 1);
                break;
            }
        }
        
        //루프를 다 돌았어도 분리되지 않은 마지막 한 문자열
        if (xLength !== notXLength) {
            answer++;
            break;
        }
    }
        
    return answer;
}
