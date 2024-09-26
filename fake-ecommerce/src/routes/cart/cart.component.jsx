import { useContext, useEffect, useRef } from "react"
import { ShoeContext } from "../../context/shoeproduct.context"
import CartMenu from "../../components/cartmenu/cartmenu.component"

const Cart = () => {
    const { shoeProduct } = useContext(ShoeContext)
    const hasPushedPageView = useRef(false);

    useEffect(() => {
        if (!hasPushedPageView.current) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "view_cart",
                page_location: window.location.href,
                page_path: window.location.pathname,
                items: shoeProduct
            });
        }
        hasPushedPageView.current = true;
    }, [shoeProduct])

    return (
        <div>
            {shoeProduct && shoeProduct.length > 0 ? <CartMenu Shoes={shoeProduct} /> : <div>Empty Cart</div>}
        </div>
    )
}
export default Cart