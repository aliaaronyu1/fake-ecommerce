import { useContext } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";

const ShoeItem = ({ shoes }) => {
    const { setShoeProduct } = useContext(ShoeContext)
    const { imageUrl, name } = shoes

    const handleAddCart = () => {
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id)

            if (existingShoe) {
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? {...item, quantity: item.quantity + 1} : item
                )
            }
            else {
                return [...prevShoeData, {...shoes, quantity : 1}]
            }
        })
    }
    return (
        <div>
            <p>{name}</p>
            <div>
                <img width={250} height={250} src={imageUrl} alt="shoe"/>
            </div>
            <button className="btn btn-success" onClick={handleAddCart}>Add to Cart</button>
        </div>
    )
}
export default ShoeItem;