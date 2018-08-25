// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max != null && node.data > max) {
    return false;
  }

  if (min != null && node.data < min) {
    return false;
  }

  // compare left node to the current node to make sure it < max = node.data
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // compare right node to current node to make sure it > min = node.data
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
