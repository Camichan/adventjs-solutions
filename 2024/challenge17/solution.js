/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    // Inicializamos la matriz de resultados con ceros
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    // Definir las posiciones adyacentes (incluyendo diagonales)
    const directions = [
      [-1, -1], [-1, 0], [-1, 1], // Fila anterior
      [0, -1],           [0, 1],    // Misma fila
      [1, -1], [1, 0], [1, 1]      // Fila siguiente
    ];
  
    // Iterar sobre todas las celdas de la cuadrícula
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Si hay una bomba en la celda, actualizar las celdas adyacentes
        if (grid[i][j]) {
          // Recorrer todas las celdas adyacentes
          for (let [dx, dy] of directions) {
            const ni = i + dx;
            const nj = j + dy;
            // Verificar si la celda adyacente está dentro de los límites
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
              result[ni][nj]++;
            }
          }
        }
      }
    }
  
    return result;
}


// EXAMPLES TESTS

detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
    [true, false],
    [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
    [true, true],
    [false, false],
    [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
  