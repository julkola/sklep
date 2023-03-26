interface ProductInCart {
    id: string,
    quantity: number,
    price: number,
    sum: number
}
export const useCartStore =  defineStore('cart', {
    state: () => ({products: <ProductInCart[]>[]}),
    
    actions: {
        addToCart(id:string, quantity:number, price:number) {
            const indexOfProductInCart = this.products.findIndex((product) => product.id === id)
            if (indexOfProductInCart === -1) 
                this.products.push({
                    id: id,
                    quantity: quantity,
                    price: price,
                    sum: price*quantity
                })
            else {
                const product = this.products[indexOfProductInCart];
                product.quantity += quantity;
                product.sum = product.price * product.quantity;
            }
        }
    },

    getters: {
        sum: (cart) => cart.products.reduce((sum, product)=> sum + product.sum, 0)
    }
})