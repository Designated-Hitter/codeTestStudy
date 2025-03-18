function solution(files) {
    return files.sort((a, b) => {
        //정규표현식을 사용하여 파일명을 HEAD, NUMBER, TAIL로 분리
        //([^0-9]+) -> 숫자가 아닌 문자(HEAD)
        //([0-9]+) -> 연속된 숫자(NUMBER)
        //(.*) -> 나머지 문자열(TAIL)
        const regex = /([^0-9]+)([0-9]+)(.*)/;
        
        //파일명을 정규 표현식에 맞춰 분리
        const[, headA, numberA] = a.match(regex);
        const[, headB, numberB] = b.match(regex);
        
        //HEAD 비교 (대소문자 구분 없음)
        //localeCompare 는 문자열을 비교할 때 사용되며, 알파벳 순서를 고려하여 정렬한다.
        const headComparison = headA.toLowerCase().localeCompare(headB.toLowerCase());
        
        //HEAD가 다르면 HEAD 기준으로 정렬
        if (headComparison != 0) {
            return headComparison;
        }
        
        //HEAD가 같으면 NUMBER 비교 (숫자로 변환하여 비교해야 함)
        //숫자는 앞에 0이 있어도 동일한 값으로 취급되므로 parseInt로 변환
        return parseInt(numberA, 10) - parseInt(numberB, 10);
    });
}
