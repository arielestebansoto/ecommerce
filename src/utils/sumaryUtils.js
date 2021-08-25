export const finalPrice = (cart) => {
    const prices_normalized = []

    cart.forEach( (purchase) => (
        prices_normalized.push(purchase.price)
    ))

    let totalPrice = 0
    
    for (let i = 0; i < prices_normalized.length; i++) {
        totalPrice = totalPrice + prices_normalized[i]
    }
    return totalPrice
}