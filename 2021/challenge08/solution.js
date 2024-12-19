export default function maxProfit(prices) {
    const allProfits = prices.flatMap((price, index) => {
      let profits = []
        for (let i = index + 1; i < prices.length; i++){
            if (prices[i] > price)  
              profits.push(prices[i] - price);
        }
        return profits
    },[])
    return allProfits.length > 0 ? Math.max(...allProfits) : -1;
}


// EXAMPLES TESTS

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) // -> -1 (no hay ganancia posible)