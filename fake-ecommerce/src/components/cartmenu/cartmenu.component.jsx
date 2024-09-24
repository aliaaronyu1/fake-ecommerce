import CartItem from "../cartitem/cartitem.component";

const CartMenu = ({ Shoes }) => {

    return (
        <div className="d-flex flex-wrap">
            {Shoes.map((shoes) => (
                <CartItem key={shoes.id} shoes={shoes} />
            ))}
        </div>
    )
}
export default CartMenu;