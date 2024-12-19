export default function decodeNumber(symbols) {
    const MAP = {
        '.' : 1,
        ',' : 5,
        ':' : 10,
        ';' : 50,
        '!' : 100
    }
    return symbols
        .split('')
        .map(symbol => MAP[symbol] || NaN)
        .reduce((result, value, index, array) => 
            result + (value < array[index + 1] ? -value : value)
        , 0);
}


// EXAMPLES TESTS

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN