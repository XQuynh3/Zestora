import React, {createContext} from 'react'
import all_product from '../Components/Assets/all_product.js'

export const ShopContext =createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i<= all_product.length; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());
    const contextValue = {all_product, cartItem};

    const addToCart = (itemID) => {
        setCartItem((prev)=> ({...prev, [itemID]: prev[itemID] + 1}));
    }   

    const removeFromCart = (itemID) => {
        setCartItem((prev)=> ({...prev, [itemID]: prev[itemID] - 1}));
    }  

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider