export default function getMinJump(obstacles) {
    const max = Math.max(...obstacles)
    for (let i= 1; i < max; i++) {
      if (obstacles.every(obs => obs % i !== 0))
        return i
    }
}

// EXAMPLES TESTS

const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles2 = [2, 4, 6, 8, 10]
getMinJump(obstacles2) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/