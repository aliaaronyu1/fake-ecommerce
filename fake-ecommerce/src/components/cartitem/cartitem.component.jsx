import { useContext, useState, useEffect } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";

const CartItem = ({ shoes }) => {
    const { imageUrl, name } = shoes
    const { setShoeProduct } = useContext(ShoeContext)
    const [recentlyAddedShoe, setRecentlyAddedShoe] = useState(null)
    const [recentlyRemovedShoe, setRecentlyRemovedShoe] = useState(null)

    useEffect(() => {
        if (recentlyAddedShoe) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "add_to_cart",
                product_id: recentlyAddedShoe.id,
                product_name: recentlyAddedShoe.name,
                price: recentlyAddedShoe.price,
                quantity: recentlyAddedShoe.quantity
            });
            
        }
    }, [recentlyAddedShoe])

    useEffect(() => {
        if (recentlyRemovedShoe) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "remove_from_cart",
                product_id: recentlyRemovedShoe.id,
                product_name: recentlyRemovedShoe.name,
                price: recentlyRemovedShoe.price,
                quantity: recentlyRemovedShoe.quantity
            });
        }
    }, [recentlyRemovedShoe])

    const handleAddQuantity = () => {
        let newQuantity = 1
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id)

            if (existingShoe) {
                newQuantity = existingShoe.quantity + 1
                setRecentlyAddedShoe({ ...existingShoe, quantity: newQuantity })
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            else {
                setRecentlyAddedShoe({ ...shoes, quantity: newQuantity })
                return [...prevShoeData, { ...shoes, quantity: 1 }]
            }
        })
    }
    const handleRemoveQuantity = () => {
        let newQuantity = 0
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id);

            if (existingShoe.quantity > 1) {
                newQuantity = existingShoe.quantity - 1
                setRecentlyRemovedShoe({ ...existingShoe, quantity: newQuantity })
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? { ...item, quantity: newQuantity } : item
                );
            } else {
                setRecentlyRemovedShoe({ ...shoes, quantity: newQuantity })
                return prevShoeData.filter((item) => item.id !== shoes.id);
            }
        });
    };

    return (
        <div>
            <p>{name}</p>
            <div>
                <img width={250} height={250} src={imageUrl} alt="shoe" />
            </div>
            <div>Quantity: {shoes.quantity}</div>
            <div>Price: ${shoes.price}</div>
            <button className="btn btn-success" onClick={handleAddQuantity}>Add</button>
            <button className="btn btn-danger" onClick={handleRemoveQuantity}>Delete</button>
        </div>
    )
}
export default CartItem;