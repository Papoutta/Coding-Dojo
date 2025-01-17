//? resources: https://www.geeksforgeeks.org/binary-search-tree-data-structure/
/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  //TODO
  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if(this.root){
      return false
    }
    return true
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (this.isEmpty()) {
      return null
    }
    while (current.left) {
      current = current.left
    }
    return current.data
  } 

  // !EXTRA
  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (this.isEmpty()) {
      return null
    }
    if (current.left) {
      current = current.left
      return this.minRecursive(current)
    }
    return current.data
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (this.isEmpty()) {
      return null
    }
    while (current.right) {
      current = current.right
    }
    return current.data
  }

  //   !EXTRA
  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (this.isEmpty()) {
      return null
    }
    if (current.right) {
      current = current.right
      return this.maxRecursive(current)
    }
    return current.data
  } 
  
  contains(searchVal){
    //initialise current to first node
    let current = this.root
    if (this.isEmpty()) {
      // if true
      return false
    }
    // Loop through the tree while 
    while (current) {
      if (current.data == searchVal) {
        // if true
        return true
      }
      //If searchVal is higher than the data of current, we go to the right of the tree
      if(searchVal < current.data) {
        //else, we go to the left
        current = current.left
      }
      else {
        current = current.right
      }
      
    }
    // If searchVal was not found return false
    return false

  }

  containsRecusrsive(searchVal, current = this.root){

  }

range(startNode=this.root){
    if(this.isEmpty()){
      return null;
    }
    return (this.max(startNode))-(this.min(startNode));
  }

  insert(newVal){
    const newNode = new BSTNode(newVal)
    if(this.isEmpty()){
      this.root= newNode
      return this
    }
    let current = this.root
    while (true) {
      if(newVal <= current.data) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      }
      if (newVal > current.data) {
        if (current.right === null) {
          current.right = newNode
          return this      
        }
        current = current.right
      }
    }
  }

  insertRecursive(newVal, current = this.root) {
    const newNode = new BSTNode(newVal);
  
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }
  
    if (newVal <= current.data) {
      if (current.left === null) {
        current.left = newNode;
        return this;
      }
      return this.insertRecursive(newVal, current.left);
    } else {
      if (current.right === null) {
        current.right = newNode;
        return this;
      } else {
        return this.insertRecursive(newVal, current.right);
      }
    }
  }
  







  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

// const emptyTree = new BinarySearchTree();
// const oneNodeTree = new BinarySearchTree();
// oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()
// console.log("min of one node tree: ", oneNodeTree.minRecursive());
// console.log("max of one node tree: ", oneNodeTree.maxRecursive());
/* twoLevelTree
        root
        10
      /   \
    5     15
*/
// const twoLevelTree = new BinarySearchTree();
// twoLevelTree.root = new BSTNode(10);
// twoLevelTree.root.left = new BSTNode(5);
// twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()
// console.log("min of two nodes tree: ", twoLevelTree.minRecursive());
// console.log("max of two nodes tree: ", twoLevelTree.maxRecursive());
/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
// const threeLevelTree = new BinarySearchTree();
// threeLevelTree.root = new BSTNode(10);
// threeLevelTree.root.left = new BSTNode(5);
// threeLevelTree.root.left.left = new BSTNode(2);
// threeLevelTree.root.left.right = new BSTNode(6);
// threeLevelTree.root.right = new BSTNode(15);
// threeLevelTree.root.right.left = new BSTNode(13);
// threeLevelTree.print()
// console.log("min of three nodes tree: ", threeLevelTree.minRecursive());
// console.log("max of three nodes tree: ", threeLevelTree.maxRecursive());

// console.log("======== Testing 'contains' method ========");
// console.log(threeLevelTree.contains(15));
// console.log(threeLevelTree.contains(100));

// console.log(threeLevelTree.range());
// console.log(threeLevelTree.range(threeLevelTree.root.left));
// console.log(threeLevelTree.range(threeLevelTree.root.right));

// console.log("======== Testing 'Insert' method ========");
// const testTree = new BinarySearchTree()

// testTree.insert(10);
// testTree.insert(5);
// testTree.insert(15);
// testTree.insert(3);
// testTree.insert(7);
// testTree.insert(12);
// testTree.insert(17);
// console.log("test after using insert :");
// testTree.print();


  // Create another tree for testing insertRecursive
  const recursiveTree = new BinarySearchTree();
  
  // Test the insertRecursive method
  console.log("\nTesting insertRecursive method...");
  recursiveTree.insertRecursive(20);
  recursiveTree.insertRecursive(10);
  recursiveTree.insertRecursive(30);
  recursiveTree.insertRecursive(5);
  recursiveTree.insertRecursive(15);
  recursiveTree.insertRecursive(25);
  recursiveTree.insertRecursive(35);
  console.log("Tree after using insertRecursive:");
  recursiveTree.print();
