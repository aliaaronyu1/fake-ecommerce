import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ShoeContext } from "../../context/shoeproduct.context";

const PurchaseSuccess = () => {
    const navigate = useNavigate()
    const randomId = Math.floor(100000 + Math.random() * 900000);

    const { shoeProduct } = useContext(ShoeContext)

    const handleShopMore = () => {
        navigate('/')
    }
    const totalPrice = shoeProduct.reduce((total, shoe) => {
        return total + Number(shoe.price) * Number(shoe.quantity)
    }, 0);

    const hasPushedPageView = useRef(false);
   
    useEffect(() => {
        if (!hasPushedPageView.current) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "purchase",
                value: totalPrice,
                items: shoeProduct,
                transaction_id: randomId
            });
        }
        hasPushedPageView.current = true;
    }, [])
    
    return (
        <div>
            Purchase Confirmed. Your order had been placed!
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGOyCmVZMTcu8PI8lnROvXqzQHteC6XcY5w&s" width={75} height={75} alt="green check"/>
            <div>
                <button className="btn btn-secondary" onClick={handleShopMore}>Shop More?</button>
            </div>
        </div>

    )
}
export default PurchaseSuccess;
