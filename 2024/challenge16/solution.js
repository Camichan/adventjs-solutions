/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    const stack = []; // Usamos una pila para rastrear montículos
  
    for (const char of s) {
      // Si el tope de la pila coincide con el carácter actual, eliminamos el tope
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop(); // Desaparece el montículo duplicado
      } else {
        stack.push(char); // Agregamos el carácter actual a la pila
      }
    }
  
    return stack.join(''); // Reconstruimos el camino final desde la pila
}


// EXAMPLES TESTS

removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos