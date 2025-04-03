function solution(keymap, targets) {
    //각 문자별 최소 입력 횟수 저장용 오브젝트
    let minPress = {};
    
    //1. keymap에서 각 문자별 최소 입력 횟수 저장
    keymap.forEach((keys, keyIndex) => {
        for (let i = 0; i < keys.length; i++) {
            let char = keys[i];
            let pressCount = i + 1;
        
            //이미 존재하는 문자라면 더 적은 입력횟수 저장
            if (minPress[char] === undefined || pressCount < minPress[char]) {
                minPress[char] = pressCount;
            }
        }     
    });
    
    //2. 타겟 문자열 처리
    let result = targets.map(target => {
        let totalPress = 0;
        
        for (let char of target) {
            if (minPress[char] === undefined) {
                return -1; //불가능한 문자
            }
            totalPress += minPress[char];
        }
        return totalPress;
    })
    return result;
}
