function solution(msg) {
    let answer = [];
    let dictionary = {};
    let dictSize = 26;
    
    //초기 사전 설정
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65 + i)] = i + 1;
    }
    
    let w = "";
    for (let c of msg) {
        let wc = w + c;
        //이미 사전에 등록된 문자
        if (dictionary[wc]) {
            w = wc;
        //등록되지 않은 경우
        } else {
            answer.push(dictionary[w]);
            dictSize++;
            dictionary[wc] = dictSize;
            w = c;
        }
    }
    
    if (w) {
        answer.push(dictionary[w]);
    }
    return answer;
}
