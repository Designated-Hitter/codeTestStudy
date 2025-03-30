function solution(dartResult) {
    let answer = [];
    //(\d+) = 숫자(0~10) 캡쳐
    //([SDT]) = 문자 S, D, T 캡쳐
    //([*#]?) = 문자 *, # (없을수 있음) 캡쳐
    ///g = 글로벌매칭(문자열 전체에서 반복 검색)
    let regex = /(\d+)([SDT])([*#]?)/g;
    let matches;
    
    while ((matches = regex.exec(dartResult)) !== null) {
        //예시: matches = ["2D*", "2", "D", "*"];
        //_ = matches[0]을 _에 할당 = 사용하지 않음
        let [_, num, bonus, option] = matches;
        num = Number(num);
        
        //지수
        if (bonus === 'D') {
            num **= 2;
        } else if (bonus === 'T') {
            num **= 3;
        }
        
        //옵션
        if (option === '*') {
            num *= 2;
            if (answer.length > 0) {
                answer[answer.length - 1] *= 2;
            }
        } else if (option === "#") {
            num *= -1;
        }
        
        answer.push(num);
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}
