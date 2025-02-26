function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';
    //분:초 문자열을 초 숫자로 변환하는 함수
    const minuteToSecond = (time) => {
        let splitedTime = time.split(":");
        let secondized = Number(splitedTime[0]) * 60 + Number(splitedTime[1]);
        return secondized;
    }
    //초 숫자를 분:초 문자열로 변환하는 함수
    const secondToMinute = (time) => {
        let minute = String(Math.floor(time / 60));
        if (minute.length <= 1) {
            minute = "0" + minute;
        }
        let second = String(time % 60);
        if (second.length <= 1) {
            second = "0" + second;
        }
        let minutized = `${minute}:${second}`;
        return minutized;
    }
    
    const secVideoLen = minuteToSecond(video_len);
    let secPos = minuteToSecond(pos);
    const secOpStart = minuteToSecond(op_start);
    const secOpEnd = minuteToSecond(op_end);
    //오프닝 건너뛰기
    if (secPos >= secOpStart && secPos <= secOpEnd) {
                secPos = secOpEnd;
            }
    
    for (let i = 0; i < commands.length; i++) {
        //next
        if (commands[i] === "next") {
            secPos = secPos + 10;
            if (secPos >= secVideoLen) {
                secPos = secVideoLen;
            }
            //오프닝 건너뛰기
            if (secPos >= secOpStart && secPos <= secOpEnd) {
                secPos = secOpEnd;
            }
            
        }
        //prev    
        if (commands[i] === "prev") {
            secPos = secPos - 10;
            if (secPos < 0) {
                secPos = 0;
            }
            //오프닝 건너뛰기
            if (secPos >= secOpStart && secPos <= secOpEnd) {
                secPos = secOpEnd;
            }
        }        
    }
    return secondToMinute(secPos);
}
