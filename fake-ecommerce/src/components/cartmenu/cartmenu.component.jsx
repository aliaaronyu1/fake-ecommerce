import { useContext } from "react";
import CartItem from "../cartitem/cartitem.component";
import { ShoeContext } from "../../context/shoeproduct.context";
import { Link } from "react-router-dom";

const CartMenu = ({ Shoes }) => {
    const { shoeProduct } = useContext(ShoeContext)
    const totalPrice = shoeProduct.reduce((total, shoe) => {
        return total + (Number(shoe.price) * Number(shoe.quantity));
    }, 0)

    
    return (
        <div>
            <div className="d-flex flex-wrap">
                {Shoes.map((shoes) => (
                    <CartItem key={shoes.id} shoes={shoes} />
                ))}
            </div>
            <h3 className="mt-4">Total: ${totalPrice}</h3>
            <Link to='/checkout'>
                <button className="btn btn-primary" >Proceed to Checkout</button>
            </Link>
    </div>

)
}
export default CartMenu;