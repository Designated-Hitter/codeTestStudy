function solution(expression) {
    
    const calc = (a, b, op) => {
        if (op === "+") {
            return a + b;
        }
        if (op === "-") {
            return a - b;
        }
        if (op === "*") {
            return a * b;
        }
    };
    //미리 가능한 우선순위를 전부 표시
    const priorityOrders = [
        ["+", "-", "*"],
        ["+", "*", "-"],
        ["-", "+", "*"],
        ["-", "*", "+"],
        ["*", "+", "-"],
        ["*", "-", "+"]
    ];
    //주어진 우선순위대로 계산하는 함수
    const calculateByPriority = (nums, ops, priority) => {
        let numList = [...nums];
        let opList = [...ops];
        
        for (let op of priority) {
            while (opList.includes(op)) {
                let idx = opList.indexOf(op);
                let result = calc(numList[idx], numList[idx + 1], op);
                numList.splice(idx, 2, result);
                opList.splice(idx, 1);
            }
        }
        return Math.abs(numList[0])
    };
    
    
    let numbers = [];
    let operators = [];
    let tempNum = "";
    //배열로 숫자와 부호를 분리
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] >= "0" && expression[i] <= "9") {
            tempNum += expression[i];
        } else {
            numbers.push(Number(tempNum));
            tempNum = "";
            operators.push(expression[i]);
        }
    }
    numbers.push(Number(tempNum));
    
    let maxPrize = 0;
    for (let priority of priorityOrders) {
        maxPrize = Math.max(maxPrize, calculateByPriority(numbers, operators, priority));
        
    }
   return maxPrize;
}
