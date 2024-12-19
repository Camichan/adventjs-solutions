export default function canMouseEat(direction, game) {
    //posicion del mouse
    let row = game.findIndex((row) => row.includes('m'))
    let col = game[row].indexOf('m')
    
    switch (direction) {
      case 'up':
        row--
        break
      case 'down':
        row++
        break
      case 'left':
        col--
        break
      case 'right':
        col++
        break
    }
      
    try {
      return game[row][col] === '*'
    } catch {
      return false
    }
}


// EXAMPLES TESTS

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false