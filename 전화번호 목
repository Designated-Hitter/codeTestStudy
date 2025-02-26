function solution(phone_book) {
    let answer = true;
    //전화번호 정렬
    phone_book = phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return answer = false;
             
        }
    }
    return answer;
}

//풀고 난 소감
//startsWith()라는 메서드가 있다는 걸 처음 알았다. 저것만 알고 있었어도 쉽게 풀 수 있을 문제였다고 생각한다...
