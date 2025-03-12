//1. 대부분의 케이스를 통과했지만 느리고 비트연산을 사용하지 않았던 코드 (오답)
function solution(numbers) {
    let answer = [];

    function findNextNumber(number) {
        let binary = number.toString(2); // 현재 숫자의 이진수
        let length = binary.length;
        
        for (let i = number + 1; ; i++) {
            let iBinary = i.toString(2); // i의 이진수 변환

            // 두 개의 이진수 길이를 맞춤
            while (iBinary.length < length) iBinary = '0' + iBinary;
            while (binary.length < iBinary.length) binary = '0' + binary;

            // 비트 차이 계산
            let difference = 0;
            for (let j = 0; j < binary.length; j++) {
                if (binary[j] !== iBinary[j]) difference++;
                if (difference > 2) break; // 2보다 크면 중단
            }

            if (difference <= 2) return i;
        }
    }

    for (const number of numbers) {
        answer.push(findNextNumber(number));
    }
    
    return answer;
}

//2. 비트연산을 이용하여 코드를 간략화 했지만 앞에서 통과하지 못했던 케이스를 결국 통과하지 못한 코드 (오답)

function solution(numbers) {
    return numbers.map(number => {
        if ((number & 1) === 0) return number + 1; // 짝수면 그냥 +1 반환

        let bit = 1;
        while ((number & bit) !== 0) { //홀수인 경우
            bit <<= 1; // 가장 낮은 0을 찾을 때까지 이동, 이후 0을 1로 변경하고 오른쪽 1을 0으로 변경
        }
        
        return number + bit - (bit >> 1);
    });
}

//3. 자바스크립트에서는 비트 연산자가 32비트 정수로 자동 변환되기 때문에, 매우 큰 정수를 이용해 비트연산을 하면 32비트 초과 부분이 잘릴 수 있음. (오답의 원인)
//이를 방지하기 위해 BigInt 자료형을 적용하여 푼 코드 (정답)

function solution(numbers) {
    return numbers.map(num => {
        let bigNum = BigInt(num) //BigInt 변환
        if (bigNum % 2n === 0n) { //짝수인 경우 + 1
            return bigNum + 1n; 
        }
        
        let bit = 1n;
        while ((bigNum & bit) !== 0n) {
            bit <<= 1n; //처음등장하는 0을 찾음
        };
        return bigNum + bit - (bit >> 1n); //0을 1로 변경하고 오른쪽 1을 0으로 변경
        
    }).map(Number); //다시 일반 숫자형으로 변환
}
