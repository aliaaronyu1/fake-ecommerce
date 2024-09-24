import { useContext } from "react"
import { ShoeContext } from "../../context/shoeproduct.context"
import CartMenu from "../../components/cartmenu/cartmenu.component"

const Cart = () => {
    const {shoeProduct} = useContext(ShoeContext)

    return (
        <div>
            {shoeProduct && shoeProduct.length > 0 ? <CartMenu Shoes={shoeProduct}/> : <div>Empty Cart</div>}
        </div>
    )
}
export default Cart