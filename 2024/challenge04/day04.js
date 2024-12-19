/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = ''
    let space = ''
    const w = 2 * height - 1
    for (let i = 0; i < height; i++){
      space = '_'.repeat(w / 2 - i)
      tree +=  space + ornament.repeat(2*i + 1) + space + '\n'
    }
    space = '_'.repeat(w / 2)
    tree += (space + '#' + space + '\n') + (space + '#' + space)
    return tree
}

// EXAMPLES TESTS

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/