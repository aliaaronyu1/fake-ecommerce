import React, { useContext, useEffect, useRef } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
    const { shoeProduct } = useContext(ShoeContext);
    const navigate = useNavigate()
    const hasPushedPageView = useRef(false);
    
    useEffect(() => {
        if (!hasPushedPageView.current) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "page_view",
                page_title: "checkout",
                page_location: window.location.href,
                page_path: window.location.pathname
            });
        }
        hasPushedPageView.current = true;
    }, [])

    const totalPrice = shoeProduct.reduce((total, shoe) => {
        return total + Number(shoe.price) * Number(shoe.quantity)
    }, 0);

    const handlePlaceOrder = () => {
        navigate('/purchase-success')
    }

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                {shoeProduct.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    shoeProduct.map((shoe) => (
                        <div key={shoe.id}>
                            <img width={100} height={100} src={shoe.imageUrl} alt={shoe.name} />
                            <div>
                                <h3>{shoe.name}</h3>
                                <p>Quantity: {shoe.quantity}</p>
                                <p>Price: ${Number(shoe.price) * Number(shoe.quantity)}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div>
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <form className="d-flex flex-wrap">
                    <label>Shipping Address: </label>
                    <input type="text" />
                    <label>Zip Code: </label>
                    <input type="number" />
                </form>
                <form className="d-flex flex-wrap">
                    <label>Credit Card Holder Name</label>
                    <input type="text" />
                    <label>Credit Card #</label>
                    <input type="text" />
                </form>

                <button className="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
            </div>
        </div>
    )
}
export default Checkout;