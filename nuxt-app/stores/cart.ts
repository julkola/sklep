interface ProductInCart {
    id: string,
    quantity: number,
    price: number,
    sum: number
}
export const useCartStore =  defineStore('cart', {
    state: () => ({products: <ProductInCart[]>[]}),
    
    actions: {
        getIndex(id:string) {
            return this.products.findIndex((product) => product.id === id)
        },
        changeQuantity(id: string, newQuantity: number) {
            const indexOfProductInCart = this.getIndex(id);
            if (indexOfProductInCart !== -1) {
                const product = this.products[indexOfProductInCart];
                product.quantity = newQuantity;
                product.sum = product.price * product.quantity;
            }
        },
        addToCart(id:string, quantity:number, price:number) {
            const indexOfProductInCart = this.getIndex(id);
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
        },
        removeFromCart(id: string) {
            const indexOfProductInCart = this.getIndex(id);
            if (indexOfProductInCart !== -1)  this.products.splice(indexOfProductInCart, 1)
        }
    },

    getters: {
        sum: (cart) => cart.products.reduce((sum, product)=> sum + product.sum, 0)
    }
})