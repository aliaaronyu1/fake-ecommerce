import { createContext, useState } from "react"
import SHOE_DATA from "../shoe_data.json"

export const ShoeContext = createContext({
    shoeProduct: [],
    setShoeProduct: () => null
})

export const ShoeProvider = ({ children }) => {
    const [shoeProduct, setShoeProduct] = useState(SHOE_DATA);
    const value = {shoeProduct}

    return <ShoeContext.Provider value={value}>{children}</ShoeContext.Provider>
}