/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    if (packages.includes('(')) {
      const begin = packages.substring(0, packages.indexOf('('))
      let packagesToSort = packages.slice(packages.indexOf('(') + 1)
      packagesToSort = fixPackages(packagesToSort)
      if (packagesToSort.includes(')')){ 
        const end = packagesToSort.substring(packagesToSort.indexOf(')') + 1)
        const sortedPackages = packagesToSort
          .slice(0, packagesToSort.indexOf(')'))
          .split('')
          .reverse()
          .join('')
        return begin + sortedPackages + end
      }   
    }
    return packages
}

// EXAMPLES TESTS

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"