function solution(n, m, section) {
    let answer = 0;
    let i = 0;
    
    while (i < section.length) {
        answer++;//롤러를 한 번 사용
        let start = section[i]//현재 롤러를 놓을 시작 위치
        
        //롤러가 닿을 수 있는 마지막 구역
        while (i < section.length && section[i] < start + m) {
            i++;
        }
    }
    
    return answer;
}
