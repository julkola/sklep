interface ProductInCart {
    id: string,
    qunatity: number,
    price: number,
    sum: number
}
export const useCartStore =  defineStore('cart', {
    state: () => ({products: <ProductInCart[]>[]}),
    
    actions: {
        addToCart(id:string, qunatity:number, price:number) {
            this.products.push({
                id: id,
                qunatity: qunatity,
                price: price,
                sum: price*qunatity
            })
        }
    },

    getters: {
        sum: (cart) => cart.products.reduce((sum, product)=> sum + product.sum, 0)
    }
})