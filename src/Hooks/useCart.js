import {useState, useEffect} from 'react'
function useCart() {
    const [cart,setCart] = useState(()=>{
        try{
            const saved = localStorage.getItem('cart')
            if(!saved) {
                return[]
            }
            return JSON.parse(saved)
        } catch (error) {
            console.log("Ошибка в localStorage", error)
            return []
        }
    })
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (!existingProduct) {
            setCart([...cart, {...product, quantity: 1}]);
        } else {
            setCart(cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }

                return item;
            }));
        }
    }
    const decreaseQuantity = (product) => {
        const itemInCart = cart.find((item) => item.id === product.id);
        if(itemInCart.quantity === 1) {
            setCart(cart.filter((item) => item.id !== product.id));
        } else {
            setCart(cart.map(item => {
                return   item.id === product.id
                    ?{...item, quantity: item.quantity - 1}
                    : item;
            }))
        }
    }
    const removeProduct = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    const clearCart = () => {
        setCart([])
    }
    const cartTotal = cart.reduce((total,item) => {
        return  total + item.price * item.quantity
    },0)
    const cartCount = cart.reduce((total,item) => {
        return total + item.quantity;
    },0)
    const roundedCartTotal = Math.round(cartTotal * 100) / 100
    return {
        cart,
        addToCart,
        removeProduct,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
        roundedCartTotal
    }
}
export default useCart;
