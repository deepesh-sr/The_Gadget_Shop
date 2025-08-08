const { createContext } = require("react");

export const ShopContext = createContext();

const ShopContextProvider = ({children}) =>{

    const currency = "₹";
    const delivery_fees = 10;

    const value = {
        products, currency, delivery_fees
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;