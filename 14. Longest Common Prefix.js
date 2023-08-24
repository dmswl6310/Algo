class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let currNode = this.root;
    for (const char of string) {
      // if(currNode.children)
      if (!currNode.children.has(char)) {
        currNode.children.set(char, new Node(currNode.value + char));
      }
      currNode = currNode.children.get(char);
    }
  }
  has(string) {
    let currNode = this.root;

    for (const char of string) {
      if (!currNode.children.has(char)) {
        return false;
      }
      currNode = currNode.children.get(char);
    }
    return true;
  }
  getLongestPrefix() {
    let prefix = "";
    let currNode = this.root;
    let mapSize = currNode.children.size;
    while (mapSize == 1) {
      let keyValue = currNode.children.keys().next().value;
      //prefix += currNode.children.get(keyValue).value;
      prefix = currNode.children.get(keyValue).value;
      currNode = currNode.children.get(keyValue);
      mapSize = currNode.children.size;
    }
    return prefix;
  }
}

var longestCommonPrefix = function (strs) {
  const trie = new Trie();
  let temp = "";
  strs.forEach((str) => {
    if (str !== temp) trie.insert(str);
  });

  return trie.getLongestPrefix();
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
