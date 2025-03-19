function solution(n) {
    //1. 삼각형 배열 초기화
    let triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    
    //2. 방향 설정(아래, 오른쪽, 위 대각선) - 반시계 방향
    let directions = [[1,0], [0,1], [-1,-1]];
    let directionIndex = 0; //현재 방향
    
    let row = 0, col = 0, num = 1;
    let totalNumbers = (n * (n + 1)) / 2 //삼각형 내부 총 숫자 개수
    
    while (num <= totalNumbers) {
        triangle[row][col] = num++;
        let nextRow = row + directions[directionIndex][0]; //아래
        let nextCol = col + directions[directionIndex][1]; //오른쪽
        
        //경계를 벗어나거나 이미 숫자가 차있는 경우 방향 변경
        if (nextRow >= n || nextCol >= triangle[nextRow].length ||
           triangle[nextRow][nextCol] !== 0) {
            directionIndex = (directionIndex + 1) % 3; //방향 전환
            nextRow = row + directions[directionIndex][0];
            nextCol = col + directions[directionIndex][1];
        }
        
        //현 위치 업데이트
        row = nextRow;
        col = nextCol;
    }
    
    //3. 2차원 배열을 1차원 배열로 변환
    return triangle.flat();
}
