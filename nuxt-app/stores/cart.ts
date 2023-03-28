interface ProductInCart {
    id: string,
    quantity: number,
    price: number,
    availability: number
}
export const useCartStore =  defineStore('cartStore', {
    state: () => ({
        products: [] as ProductInCart[]
    }),
    
    actions: {
        getIndex(id:string) {
            return this.products.findIndex((product) => product.id === id)
        },
        changeQuantity(id: string, newQuantity: number) {
            const indexOfProductInCart = this.getIndex(id);
            if (indexOfProductInCart !== -1) {
                const product = this.products[indexOfProductInCart];
                product.quantity = newQuantity;
            }
        },
        addToCart(id:string, quantity:number, price:number, availability:number) {
            const indexOfProductInCart = this.getIndex(id);
            if (indexOfProductInCart === -1) 
                this.products.push({
                    id: id,
                    quantity: quantity,
                    price: price,
                    availability: availability
                })
            else {
                const product = this.products[indexOfProductInCart];
                product.quantity += quantity;
            }
        },
        removeFromCart(id: string) {
            const indexOfProductInCart = this.getIndex(id);
            if (indexOfProductInCart !== -1)  this.products.splice(indexOfProductInCart, 1)
        }
    },

    getters: {
        sum: (cart) => cart.products.reduce((sum, product)=> sum + product.quantity*product.price, 0).toFixed(2),
        getProduct: (cart) => {
            return (id: string) => {
                const index = cart.products.findIndex((product) => product.id === id);
                return index !== -1 ? cart.products[index] : null;
            }
        }
    },
    persist: true,
})