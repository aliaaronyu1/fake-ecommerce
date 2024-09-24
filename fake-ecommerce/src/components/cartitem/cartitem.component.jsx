import { useContext } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";

const CartItem = ({ shoes }) => {
    const { imageUrl, name } = shoes
    const { setShoeProduct } = useContext(ShoeContext)

    const handleAddQuantity = () => {
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id)

            if (existingShoe) {
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            else {
                return [...prevShoeData, { ...shoes, quantity: 1 }]
            }
        })
    }
    const handleRemoveQuantity = () => {
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id);

            if (existingShoe.quantity > 1) {
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
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
            <button className="btn btn-success" onClick={handleAddQuantity}>Add</button>
            <button className="btn btn-danger" onClick={handleRemoveQuantity}>Delete</button>
        </div>
    )
}
export default CartItem;