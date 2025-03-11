function solution(n, k) {
    //1. k진수로 변환
    const converted = n.toString(k);
    
    //2. 0을 기준으로 split하여 숫자조각배열 생성
    const candidates = converted.split("0").filter(num => num !== "");
    
    //3. 소수 판별 함수
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        
        if (num === 2) {
            return true;
        }
        
        if (num % 2 === 0) {
            return false;
        }
        
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    //4. 소수 개수 세기
    return candidates.map(Number).filter(isPrime).length;
}
