function isAsc(items) {
    if (items.length !== [...new Set(items)].length) {
      return false;
    }
    return items
        .slice(0, -1)
        .reduce((result, item, index) => item < items[index + 1], false);
}

export default function checkSledJump(heights) {
    const top = heights.indexOf(Math.max(...heights))
    const left = heights.slice(0, top + 1)
    const right = heights.slice(top).reverse()
    return isAsc(left) && isAsc(right)
}


// EXAMPLES TESTS

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!