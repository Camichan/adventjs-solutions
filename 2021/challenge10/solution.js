export default function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50]
    let rest = change
    return coins.reduceRight((result, coin) => {
      result.unshift(Math.floor(rest / coin))
      rest = rest % coin
      return result
    }, [])
}

// EXAMPLES TESTS

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos