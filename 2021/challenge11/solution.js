export default function shouldBuyFidelity(times) {
    if (times < 1) {
        return false;
    } 
    const ticketPrice = 12;
    const voucherPrice = 50;
    const discount = 0.75;
    const totalWithNormalPrices = times * ticketPrice;
    const totalWithFidelity = 250 + Array(times).fill(0).reduce((result, _value, index) => {
        return result + ticketPrice * Math.pow(discount, index + 1);
    })
    return totalWithFidelity < totalWithNormalPrices;
}

// EXAMPLES TESTS

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad