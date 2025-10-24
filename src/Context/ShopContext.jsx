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
    

    const addToCart = (itemID) => {
        setCartItem((prev)=> ({...prev, [itemID]: prev[itemID] + 1}));
        console.log(cartItem);
    }   

    const removeFromCart = (itemID) => {
        setCartItem((prev)=> ({...prev, [itemID]: prev[itemID] - 1}));
    }  

    const getTotalCartAmount = () => {
        let totalAmount = 0;    
        for (const item in cartItem){
            if (cartItem[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItem[item];
            }
            return totalAmount;
        }
    }

    const contextValue = {getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider