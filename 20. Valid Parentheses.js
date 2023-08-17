class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    if (this.arr.length == 0) {
      return true;
    }
    return false;
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = new Stack();

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const stackChar = stack.top();
      if (
        (char === ")" && stackChar === "(") ||
        (char === "]" && stackChar === "[") ||
        (char === "}" && stackChar === "{")
      ) {
        stack.pop();
      } else {
        console.log("짝이 안맞음");
        return false;
      }
    }
  }

  if (!stack.isEmpty()) return false;
  return true;
};
