class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(val) {
    this.heap.push(val);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      parentIndex !== 0 &&
      !this.compare(this.heap[parentIndex],this.heap[currentIndex])
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const val = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      (this.heap[leftIndex] &&
        !this.compare(this.heap[currentIndex],this.heap[leftIndex],)) ||
      (this.heap[rightIndex] &&
        !this.compare(this.heap[currentIndex],this.heap[rightIndex]))
    ) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
      } else if (this.compare(this.heap[rightIndex], this.heap[leftIndex])) {
        this._swap(currentIndex, rightIndex);
        currentIndex = rightIndex;
      } else if (this.compare(this.heap[leftIndex], this.heap[rightIndex])) {
        this._swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return val;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    let temp = { ...this.heap[a] };
    this.heap[a] = { ...this.heap[b] };
    this.heap[b] = { ...temp };
    // [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  compare(a, b) {
    if (a.depth <= b.depth) return true;
    else return false;
  }
}

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  // 보드 사이즈
  const size = board[0].length;

  // 보드 끝지점
  const lastRow = 0;
  const lastCol = size % 2 == 0 ? 0 : size - 1;

  // 가장 최단 이동횟수 찾기 => priority_queue 사용
  const priority_queue = new MinHeap();

  // 방문여부
  const visited = Array.from(Array(size), () => Array(size).fill(false));

  // 목적 위치, 이동해왔는지 여부
  priority_queue.push({ row: size - 1, col: 0, moved: false, depth: 0 });

  while (!priority_queue.isEmpty()) {
    const { row, col, moved, depth } = priority_queue.pop();
    if (row == lastRow && col == lastCol) return depth;
    if (visited[row][col]) continue;

    // 사다리 or 뱀이 없거나, 이미 타고온 상태
    if (board[row][col] == -1 || moved) {
      visited[row][col] = true;
      const nowLabel = changeCoordToBous(row, col, size);
      for (let i = 1; i <= 6; i++) {
        const nextLabel = nowLabel + i;
        const nextCoord = changeBousToCoord(nextLabel, size);
        if (
          nextCoord.row < 0 ||
          nextCoord.col >= size ||
          nextCoord.col < 0 ||
          nextCoord.col >= size
        )
          break;
        priority_queue.push({
          row: nextCoord.row,
          col: nextCoord.col,
          moved: false,
          depth: depth + 1,
        });
      }
    } else {
      const next = changeBousToCoord(board[row][col],size);
      priority_queue.push({
        row: next.row,
        col: next.col,
        moved: true,
        depth: depth,
      });
    }
  }

  return -1;
};

// 좌표계 => 부스트로페돈
const changeCoordToBous = (row, col, size) => {
  const tempR = size - 1 - row;
  const tempC = tempR % 2 == 0 ? col + 1 : size - col;
  const changedLabel = tempR * size + tempC;
  return changedLabel;
};
// 부스트로페돈 => 좌표계
const changeBousToCoord = (label, size) => {
  const tempNum1 = parseInt((label-1) / size);
  const tempNum2 = (label-1) % size;

  const changedRow = size - 1 - tempNum1;
  const changedCol = tempNum1 % 2 == 0 ? tempNum2: size-1 - tempNum2;

  return { row: changedRow, col: changedCol };
};

console.log(
  snakesAndLadders([[-1,-1,-1,46,47,-1,-1,-1],[51,-1,-1,63,-1,31,21,-1],[-1,-1,26,-1,-1,38,-1,-1],[-1,-1,11,-1,14,23,56,57],[11,-1,-1,-1,49,36,-1,48],[-1,-1,-1,33,56,-1,57,21],[-1,-1,-1,-1,-1,-1,2,-1],[-1,-1,-1,8,3,-1,6,56]])
);
