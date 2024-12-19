/** 
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let x = 0, y = 0; // Posición inicial
    let multiplier = 1; // Multiplicador por defecto
    let inverted = false; // Estado de inversión
    const visited = new Set(); // Conjunto de movimientos realizados
    const invertMove = { 'L': 'R', 'R': 'L', 'U': 'D', 'D': 'U' } 
    // Procesar movimientos
    for (let i = 0; i < moves.length; i++) {
      let move = moves[i];
  
      if (move === '*') {
        multiplier = 2; // Cambiar el multiplicador
        continue;
      }
  
      if (move === '!') {
        inverted = !inverted; // Invertir el estado
        continue;
      }
  
      if (move === '?') {
        i++; // Procesar el siguiente movimiento bajo la condición
        if (i >= moves.length) break; // Salir si no hay más movimientos
        move = moves[i];
        if (visited.has(move)) {
          multiplier = 1; // Reiniciar el multiplicador
          //visited.add(move);
          continue;
        }
      }
      
      // Aplicar inversión
      if (inverted) {
        move = invertMove[move] ?? move;
      }
  
      // Realizar el movimiento
      switch (move) {
        case 'L': x -= multiplier; break;
        case 'R': x += multiplier; break;
        case 'U': y += multiplier; break;
        case 'D': y -= multiplier; break;
        default: 
          multiplier = 1; // Reiniciar el multiplicador si es desconocido
          continue;
      }
      visited.add(move);
      inverted = inverted ? !inverted: inverted; // Devuelve la inversion
      multiplier = 1; // Reiniciar el multiplicador después de cada movimiento
    }
    
    // Retornar resultado
    return x === 0 && y === 0 ? true : [x, y];
}

// EXAMPLES TESTS

isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'