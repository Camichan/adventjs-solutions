/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const renos = indices.length
    const race = indices.map((reno, i) => {
      const spaces = ' '.repeat(renos - i - 1)
      console.log(spaces)
      const r = (reno !== 0) ? 'r' : '~'
      const track = '~'.repeat(length)
      const position = (reno >= 0) ? reno : length + reno 
      const progress = track.substring(0, position) + r + track.substring(position + 1)
      return spaces + `${progress} /${i+1}`
    })
    return race.join('\n')
}

// EXAMPLES TESTS

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/