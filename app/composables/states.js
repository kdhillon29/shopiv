export const useCart = () => {
    return useState('cart', () => {
        let cart = []
        console.log('cart', cart)

        if (import.meta.client && localStorage.getItem("cart")) {
            console.log('localstorage', localCart)

            const localCart = JSON.parse(localStorage.getItem("cart"))
            if (localCart) {

                console.log('localstorage', localCart)
                cart = localCart;


            }
            return cart
        }
        return cart
    })
}