function countDecorations(bigTree) {
    return [bigTree].reduce((total, node) => {
      const right = node.right ? countDecorations(node.right) : 0
      const left = node.left ? countDecorations(node.left) : 0
      return total + right + left + node.value
    }, 0)
}

export default function checkIsSameTree(treeA, treeB) {
    return countDecorations(treeA) === countDecorations(treeB)
}


// EXAMPLES TESTS

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true