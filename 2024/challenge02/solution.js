/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const size = Math.max(...names.map((name) => name.length));
    const border = `${"*".repeat(size + 4)}`;
    let output = border;
    names.forEach((name) => output += `\n* ${name.padEnd(size, " ")} *`);
                  output += `\n${border}`;   
    return output
}

// EXAMPLES TESTS

createFrame(['midu', 'madeval', 'educalvolpz'])

/** Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

createFrame(['midu'])

/** Resultado esperado:
********
* midu *
********
*/

createFrame(['a', 'bb', 'ccc'])

/** Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
*/

createFrame(['a', 'bb', 'ccc', 'dddd'])