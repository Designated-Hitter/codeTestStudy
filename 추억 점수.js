function solution(name, yearning, photo) {
    let answer = [];
    let missing = {};
    
    for (let i = 0; i < name.length; i++) {
        missing[name[i]] = yearning[i]
    }
    for (let j = 0; j < photo.length; j++) {
        let missingPoint = 0;
        for (let k = 0; k < photo[j].length; k++) {
            if (name.includes(photo[j][k])) {
                missingPoint += missing[photo[j][k]];
            }
        }
        answer.push(missingPoint);
    }
    return answer;
}
