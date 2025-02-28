//로직은 맞았지만 효율성에서 O(N log N) (heapify) + O(log N) (each merge) 즉, N log N의 시간복잡도를 가진 코드. 효율성 테스트를 통과하지 못했다.
function solution(scoville, K) {
    let answer = 0;
    
    // Min-Heap 역할을 할 Priority Queue를 직접 구현 (간단한 방식)
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this.heap.sort((a, b) => a - b); // 오름차순 정렬
        }

        pop() {
            return this.heap.shift(); // 가장 작은 원소 제거 및 반환
        }

        size() {
            return this.heap.length;
        }
    }

    const minHeap = new MinHeap();
    scoville.forEach((s) => minHeap.push(s)); // 모든 스코빌 값을 Min-Heap에 추가

    while (minHeap.size() > 1) {
        let first = minHeap.pop();  // 가장 작은 값
        if (first >= K) return answer; // 최소값이 이미 K 이상이면 종료

        let second = minHeap.pop(); // 두 번째로 작은 값
        let newScoville = first + second * 2;
        minHeap.push(newScoville);
        answer++;
    }

    return minHeap.pop() >= K ? answer : -1; // 남은 값이 K 이상인지 확인
}

//시간복잡도를 log N으로 개선한 코드..이긴 한데 알아보기 어려웠다.

function solution(scoville, K) {
    let answer = 0;
    
    //min-heap 역할을 할 priority queue를 직접 구현하기
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        
        push(value) {
            this.heap.push(value);
            this._heapifyUp();
        }
        
        pop() {
            if (this.heap.length === 1) {
                return this.heap.pop();
            }
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._heapifyDown();
            return min; //가장 작은 원소 제거 및 반환
        }
        
        peek() {
            return this.heap[0];
        }
        
        size() {
            return this.heap.length;
        }
        
        _heapifyUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[parentIndex] <= this.heap[index]) break;
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            }
        }
        
        _heapifyDown() {
            let index = 0;
            while (2 * index + 1 < this.heap.length) {
                let leftChild = 2 * index + 1;
                let rightChild = 2 * index + 2;
                let smallerChild = leftChild;
                
                if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[leftChild]) {
                    smallerChild = rightChild;
                }
                
                if (this.heap[index] <= this.heap[smallerChild]) break;
                [this.heap[index], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[index]];
                index = smallerChild;
            }
        }
    }
    
    const minHeap = new MinHeap();
    scoville.forEach((s) => minHeap.push(s)); //모든 스코빌 값을 min-heap에 추가
    
    while (minHeap.size() > 1) {
        if (minHeap.peek() >= K) {
            return answer; //최소값이 이미 K이상이면 종료
        }
        let first = minHeap.pop() //가장 작은 값
        let second = minHeap.pop(); //두번째로 작은 값
        let newScoville = first + second * 2;
        minHeap.push(newScoville);
        answer++;
    }
    return minHeap.pop() >= K ? answer : -1; //남은 값이 K 이상인지 확인
}
