export default function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    return /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g.test(letter)
}

// EXAMPLES TESTS

isValid("bici coche (balón) bici coche peluche") // -> ✅
isValid("(muñeca) consola bici") // ✅

isValid("bici coche (balón bici coche") // -> ❌
isValid("peluche (bici [coche) bici coche balón") // -> ❌
isValid("(peluche {) bici") // -> ❌
isValid("() bici") // ❌