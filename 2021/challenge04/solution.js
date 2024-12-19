export default function createXmasTree(height) {
    const ball = '*';
    const space = '_';
    const trunk = '#'
    const base = space.repeat(height-1) + trunk + space.repeat(height-1);
    const tree = []
    for ( let i = 1; i<= height; i++)
    {
        tree.push(space.repeat(height-i) + ball.repeat(2*i-1) + space.repeat(height-i));
    }
    tree.push(base)
    tree.push(base)
    return tree.join('\n')
}

// EXAMPLES TESTS

createXmasTree(5)
/**
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
 */

createXmasTree(3)
/**
__*__
_***_
*****
__#__
__#__
 */