/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    const regex = /^[#]\s*[*]\s*[#]$/i
    const border = /^[#]{3,}$/i
    if (border.test(box[0]) && border.test(box[box.length - 1])) {
      box.slice(1, -1)
    } else {
      return false
    }
    return box.some((line) => regex.test(line))
}

// EXAMPLES TESTS

inBox([
    "###",
    "#*#",
    "###"
]) // ➞ true

inBox([
"####",
"#* #",
"#  #",
"####"
]) // ➞ true

inBox([
"#####",
"#   #",
"#  #*",
"#####"
]) // ➞ false

inBox([
"#####",
"#   #",
"#   #",
"#   #",
"#####"
]) // ➞ false