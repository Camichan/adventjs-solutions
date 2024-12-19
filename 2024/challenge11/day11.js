/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    return /^[0-9]*[_]((.+?)+)\./.exec(filename)[1]
}

// EXAMPLES TESTS

decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"