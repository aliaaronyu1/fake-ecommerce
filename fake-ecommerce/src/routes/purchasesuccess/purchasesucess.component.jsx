import { useNavigate } from "react-router-dom";

const PurchaseSuccess = () => {
    const navigate = useNavigate()

    const handleShopMore = () => {
        navigate('/')
    }
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
