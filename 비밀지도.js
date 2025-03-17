function solution(n, arr1, arr2) {
    let answer = [];
    let arr1Bi = []
    let arr2Bi = []
    
    //1번 arr 2진수화
    for (let i = 0; i < arr1.length; i++) {
        let binary = arr1[i].toString(2)
        //2진수가 n보다 짧은 경우 앞을 0으로 채우기
        binary = binary.padStart(n, "0");
        arr1Bi.push(binary);
    }
    
    //2번 arr 2진수화
    for (let j = 0; j < arr2.length; j++) {
        let binary = arr2[j].toString(2)
        binary = binary.padStart(n, "0");
        arr2Bi.push(binary);
    }
    //두 arr 비교
    for (let k = 0; k < arr1Bi.length; k++) {
        let mapping = "";
        for (let l = 0; l < n; l++) {
            if (arr1Bi[k][l] === "0" && arr2Bi[k][l] === "0") {
                mapping = mapping + " ";
            } else {
                mapping = mapping + "#";
            }
        }
        answer.push(mapping);
        
    }
    return answer;
}
