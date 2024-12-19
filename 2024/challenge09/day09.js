/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const rows = board.length
    const cols = board[0].length
  
    let row, col
    for (let i = 0; i < rows; i++){
      const c = board[i].indexOf('@')
      if (c !== -1) {
        row = i 
        col = c
        break
      }
    }
  
    let [nextRow, nextCol] = [row, col]
    switch(mov) {
      case 'L':
        nextCol--
        break
      case 'R':
        nextCol++
        break
      case 'U':
        nextRow--
        break
      case 'D':
        nextRow++
        break
    }
    
    if((nextRow < 0 || nextRow >= rows) || (nextCol < 0 || nextCol >= cols))
      return 'crash'
  
    switch(board[nextRow][nextCol]){
      case 'o':
        return 'crash'
      case '*':
        return 'eat'
      case '·':
        return 'none'
    }
}

// EXAMPLES TESTS

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha