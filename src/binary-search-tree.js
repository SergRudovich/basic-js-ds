const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else {
      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }
  findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }
  findMaxNode(node) {
    if (node.right === null)
      return node;
    else
      return this.findMaxNode(node.right);
  }
  removeNode(node, key) {
    if (node === null)
      return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  search(node, data) {
    if (node === null)
      return null;
    else if (data < node.data)
      return this.search(node.left, data);
    else if (data > node.data)
      return this.search(node.right, data);
    else
      return node;
  }
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null)
      this.rootNode = newNode;
    else {
      this.insertNode(this.rootNode, newNode);
    }
  }


  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return (this.search(this.rootNode, data)) ? true : false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.search(this.rootNode, data);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let minNode = this.findMinNode(this.rootNode);
    return (minNode) ? minNode.data : null;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let maxNode = this.findMaxNode(this.rootNode);
    return (maxNode) ? maxNode.data : null;
  }

}