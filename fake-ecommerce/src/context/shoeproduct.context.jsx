import { createContext, useState } from "react"

export const ShoeContext = createContext({
    shoeProduct: [],
    setShoeProduct: () => null
})

export const ShoeProvider = ({ children }) => {
    const [shoeProduct, setShoeProduct] = useState(
        []
    );
    const value = {shoeProduct, setShoeProduct}

    return <ShoeContext.Provider value={value}>{children}</ShoeContext.Provider>
}